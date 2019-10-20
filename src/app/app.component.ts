import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ITreeState, ITreeOptions, TreeModel, TreeNode } from 'angular-tree-component';
import { DataService, NodeInterface } from './services/list.service';
import { v4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    private _nodes: TreeNodeInterface[] = [];
    set nodes(value: TreeNodeInterface[]) {
        this._nodes = value;
        this.ref.detectChanges();
    }

    get nodes(): TreeNodeInterface[] {
        return this._nodes;
    }

    public constructor(
        public dataService: DataService,
        private ref: ChangeDetectorRef,
        ) {
    }

    public state: ITreeState = {
        expandedNodeIds: {
          1: true,
          2: true
        },
        hiddenNodeIds: {},
        activeNodeIds: {}
      };

    public options: ITreeOptions = {
        useCheckbox: true,
        allowDrag: (node) => node.isLeaf,
        getNodeClone: (node) => ({
          ...node.data,
          id: v4(),
          name: `copy of ${node.data.name}`
        })
    };
    
    public optionsDisabled: ITreeOptions = {
        useCheckbox: true,
        getChildren: this.getChildren.bind(this),
        useTriState: false
    };
    
    public getChildren(node: any) {
        const newNodes = [
            {
                name: 'child1'
            }, {
                name: 'child2'
            }
        ];
    
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(newNodes), 1000);
        });
      }

    public filterFn(value: string, treeModel: TreeModel) {
        treeModel.filterNodes((node: TreeNode) => fuzzysearch(value, node.data.name));
    }

    public parseRecurse(value: NodeInterface[]) {
        return value.map((currentData: NodeInterface) => {
            return {
                name: `${currentData.code} ${currentData.description}`,
                children: this.parseRecurse(currentData.nodes),
            }
        });
    }

    public parseData(data: NodeInterface[]): TreeNodeInterface[] {
        return this.parseRecurse(data);
    }

    public ngOnInit() {
        this.dataService.getData()
            .subscribe((data: NodeInterface[]) => {
                this.nodes = this.parseData(data);
        });
    }
}

function fuzzysearch (needle: string, haystack: string) {
    const haystackLC = haystack.toLowerCase();
    const needleLC = needle.toLowerCase();
  
    const hlen = haystack.length;
    const nlen = needleLC.length;
  
    if (nlen > hlen) {
      return false;
    }
    if (nlen === hlen) {
      return needleLC === haystackLC;
    }
    outer: for (let i = 0, j = 0; i < nlen; i++) {
      const nch = needleLC.charCodeAt(i);
  
      while (j < hlen) {
        if (haystackLC.charCodeAt(j++) === nch) {
          continue outer;
        }
      }
      return false;
    }
    return true;
  }

  interface TreeNodeInterface {
    name: string;
    children: ({
        name: string;
        children?: undefined;
    } | {
        name: string;
        children: {
            name: string;
        }[];
    })[];
}
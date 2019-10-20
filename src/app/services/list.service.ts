import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private readonly apiUrl = 'http://localhost:4201';

    constructor(private http: HttpClient) { }

    public getData(): Observable<NodeInterface[]> {
        const url = `${this.apiUrl}/nodes`;
        return this.http.get<NodeInterface[]>(url);
    }  
}

export interface NodeInterface {
  code: string;
  description: string;
  nodes: NodeInterface[];
}
import {BrowserModule} from '@angular/platform-browser';
import {NgModule, enableProdMode} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DataService } from './services/list.service';
import { TreeModule } from 'angular-tree-component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    TreeModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
//
enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);
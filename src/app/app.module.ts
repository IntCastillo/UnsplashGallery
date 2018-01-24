import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { CategoryPreviewComponent } from './home-view/category-preview/category-preview.component';
import { NavbarComponent } from './navbar/navbar.component';

import {DataService} from './data.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CategoryPreviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    DataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

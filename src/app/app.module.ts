import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeViewComponent} from './home-view/home-view.component';
import {CategoryPreviewComponent} from './home-view/category-preview/category-preview.component';
import {NavbarComponent} from './navbar/navbar.component';

import {DataService} from './data.service';
import {ModalService} from './modal.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';

import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {CollectionViewComponent} from './collection-view/collection-view.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CategoryPreviewComponent,
    NavbarComponent,
    ModalComponent,
    CollectionViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    MatTabsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  providers: [
    DataService,
    ModalService,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}

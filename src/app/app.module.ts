import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeViewComponent} from './home-view/home-view.component';
import {CategoryPreviewComponent} from './home-view/collection-preview/collection-preview.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CollectionViewComponent} from './collection-view/collection-view.component';

import {DataService} from './services/data.service';
import {ModalService} from './services/modal.service';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app.routing';

import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ReactiveFormsModule} from '@angular/forms';
import {ThumbnailComponent} from './thumbnail/thumbnail.component';

import {DatePipe} from './pipes/date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    CategoryPreviewComponent,
    NavbarComponent,
    ModalComponent,
    CollectionViewComponent,
    ThumbnailComponent,
    DatePipe
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
    MatSelectModule,
    AppRoutingModule,
    InfiniteScrollModule,
    ReactiveFormsModule
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

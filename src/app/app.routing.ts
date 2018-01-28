import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeViewComponent} from './home-view/home-view.component';
import {CollectionViewComponent} from './collection-view/collection-view.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: 'collection/:id',
    component: CollectionViewComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}

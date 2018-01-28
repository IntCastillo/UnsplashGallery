import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from '../services/data.service';
import {ISubscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit, OnDestroy {

  private collectionSub: ISubscription;
  collections = this.data.collections;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    let i = 0;
    this.collections.forEach(collection => {
      this.collectionSub = this.data.getCollection(collection.id)
        .subscribe(data => {
          this.collections[i]['previews'] = data;
          i++;
        });
    });
  }

  ngOnDestroy() {
    this.collectionSub.unsubscribe();
  }

}

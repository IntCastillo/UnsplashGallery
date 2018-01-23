import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.scss']
})
export class HomeViewComponent implements OnInit {

  collectionSub: ISubscription;
  private collectionsID = [182565, 358545, 923267];
  collectionsPreviews = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    const that = this;
    this.collectionsID.forEach(id => {
        this.collectionSub = this.data.getCollection(id).subscribe(data => {
          this.collectionsPreviews.push(data);
          console.log(this.collectionsPreviews);
        });
      });
  }



}

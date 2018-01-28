import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../services/data.service';
import {ISubscription} from 'rxjs/Subscription';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit, OnDestroy {

  private routeSub: ISubscription;
  private collectionID: number;
  photos;
  private photosSub: ISubscription;
  private itemsPerPage = 16;
  private currentPage = 1;
  private pageLoaded = false;
  noMoreItems = false;
  private currentSort = 'latest';
  private selection: FormControl;

  constructor(private route: ActivatedRoute, private data: DataService) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.collectionID = params.id;
      this.getFirstPage();
    });
    this.selection = new FormControl('latest');
    this.currentSort = 'latest';
  }

  getFirstPage() {
    this.photosSub = this.data.getCollection(this.collectionID, 1, this.itemsPerPage, this.currentSort)
      .subscribe(data => {
        this.photos = data;
        this.pageLoaded = true;
      });
  }

  onScroll() {
    this.pageLoaded = false;
    this.currentPage++;
    this.photosSub = this.data.getCollection(this.collectionID, this.currentPage, this.itemsPerPage, this.currentSort).subscribe(data => {

      Object.keys(data).forEach(photo => {
        this.photos.push(data[photo]);
      });

      // if there's no data show noMoreItems text
      if (data[0] === undefined) {
        this.noMoreItems = true;
      }

      this.pageLoaded = true;
    });
  }

  sort() {
    if (this.currentSort === this.selection['value']) {
      return;
    }

    switch (this.selection['value']) {
      case 'latest':
        this.currentSort = 'latest';
        break;
      case 'oldest':
        this.currentSort = 'oldest';
        break;
      case 'popular':
        this.currentSort = 'popular';
        break;
      default:
        break;
    }
    this.pageLoaded = false;
    this.getFirstPage();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.photosSub.unsubscribe();
  }

}

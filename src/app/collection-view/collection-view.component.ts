import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';
import {ModalService} from '../modal.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-collection-view',
  templateUrl: './collection-view.component.html',
  styleUrls: ['./collection-view.component.scss']
})
export class CollectionViewComponent implements OnInit, OnDestroy {

  private collectionID: number;
  private photos;
  private photosSub: ISubscription;
  private currentPage = 1;
  private pageLoaded = false;
  private noMoreItems = false;

  constructor(private route: ActivatedRoute,
              private data: DataService,
              private modal: ModalService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.collectionID = params.id);
    this.photosSub = this.data.getCollection(this.collectionID, 1, 16).subscribe(data => {
      this.photos = data;
      this.pageLoaded = true;
    });
  }

  openModal(photo) {
    this.modal.openModal(photo);
  }

  onScroll() {
    this.pageLoaded = false;
    this.currentPage++;
    console.log(this.currentPage);
    this.photosSub = this.data.getCollection(this.collectionID, this.currentPage, 16).subscribe(data => {
      Object.keys(data).forEach(photo => {
        this.photos.push(data[photo]);
        if (!data[photo]) {
          this.noMoreItems = true;
        }
      });
      this.pageLoaded = true;
    });
  }

  ngOnDestroy() {
    this.photosSub.unsubscribe();
  }

}

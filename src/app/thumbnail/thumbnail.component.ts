import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ModalService} from '../services/modal.service';
import {DataService} from '../services/data.service';
import {ISubscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent implements OnInit, OnDestroy {

  @Input() photoID: string;

  photoDetails;
  private photoDetailsSub: ISubscription;

  constructor(private modal: ModalService, private data: DataService) {
  }

  ngOnInit() {
    this.photoDetailsSub = this.data.getSinglePhoto(this.photoID)
      .subscribe(data => this.photoDetails = data);
  }

  openModal() {
    this.modal.openModal(this.photoDetails);
  }

  ngOnDestroy() {
    this.photoDetailsSub.unsubscribe();
  }

}

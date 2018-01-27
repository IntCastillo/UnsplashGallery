import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ModalComponent} from '../../modal/modal.component';


@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent {

  @Input() photos: Array<Object>;
  @Input() id: number;

  @Output() collectionToShow = new EventEmitter();

  fileNameDialogRef: MatDialogRef<ModalComponent>;

  constructor(private dialog: MatDialog) {
  }

  showCollection() {
    this.collectionToShow.emit(this.id);
  }

  openModal(photo) {
    this.fileNameDialogRef = this.dialog.open(ModalComponent, {
      minWidth: 700,
      autoFocus: false,
      data: {
        url: photo.urls.regular,
        userName: photo.user.name,
        userPhoto: photo.user.profile_image.medium,
        userLocation: photo.user.location,
        likes: photo.likes,
        date: photo.created_at
      }
    });
  }


}

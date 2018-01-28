import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  photo;
  isImageLoaded = false;

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) private modalData) {
  }

  ngOnInit() {
    this.photo = this.modalData.photo;
    this.isImageLoaded = false;
  }

  onLoad() {
    this.isImageLoaded = true;
  }

}

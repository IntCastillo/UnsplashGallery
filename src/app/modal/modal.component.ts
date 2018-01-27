import {Component, OnInit, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  private photoURL: string;
  private userName: string;
  private userPhoto: string;
  private userLocation: string;
  private likes: number;
  private date: string;

  private isImageLoaded = false;

  constructor(private dialogRef: MatDialogRef<ModalComponent>,
              @Inject(MAT_DIALOG_DATA) private data) {
  }

  ngOnInit() {
    this.photoURL = this.data.url;
    this.userName = this.data.userName;
    this.userPhoto = this.data.userPhoto;
    this.userLocation = this.data.userLocation;
    this.likes = this.data.likes;
    this.date = this.data.date;

    this.isImageLoaded = false;
  }

  onLoad() {
    this.isImageLoaded = true;
  }

}

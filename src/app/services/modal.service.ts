import {Injectable} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {MatDialog, MatDialogRef} from '@angular/material';

@Injectable()
export class ModalService {

  fileNameDialogRef: MatDialogRef<ModalComponent>;

  constructor(private dialog: MatDialog) {
  }

  openModal(photo) {
    this.fileNameDialogRef = this.dialog.open(ModalComponent, {
      minWidth: 700,
      autoFocus: false,
      data: {
        photo: photo
      }
    });
  }

}

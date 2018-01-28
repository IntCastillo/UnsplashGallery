import {Component, Input} from '@angular/core';
import {ModalService} from '../../modal.service';


@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent {

  @Input() photos: Array<Object>;
  @Input() id: number;

  constructor(private modal: ModalService) {
  }

  openModal(photo) {
    this.modal.openModal(photo);
  }
}

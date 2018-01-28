import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-category-preview',
  templateUrl: './collection-preview.component.html',
  styleUrls: ['./collection-preview.component.scss']
})
export class CategoryPreviewComponent {

  @Input() photos: Array<Object>;
  @Input() id: number;

}

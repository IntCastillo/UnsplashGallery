import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {

  constructor() { }

  @Input() photos: Array<Object>;
  @Input() id: number;

  @Output() collectionToShow = new EventEmitter();

  ngOnInit() {
  }

  showCollection() {
    this.collectionToShow.emit(this.id);
  }



}

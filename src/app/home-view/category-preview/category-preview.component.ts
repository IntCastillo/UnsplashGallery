import { Component, OnInit, Input } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {

  masonryOptions: NgxMasonryOptions = {
    columnWidth: 200,
    gutter: 20
  };

  constructor() { }

  @Input() photos;

  ngOnInit() {
    console.log(this.photos[0].urls.thumb);
  }



}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.scss']
})
export class CategoryPreviewComponent implements OnInit {

  constructor() { }

  @Input() photos;

  ngOnInit() {
  }

}

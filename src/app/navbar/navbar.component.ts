import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  collections: Array<any>;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.collections = this.data.collections;
  }

}

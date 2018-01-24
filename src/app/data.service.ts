import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private endpoint = 'https://api.unsplash.com';
  private appID = '92eb7437dd10b8effb710b186827c76f42ecca9edd05345b9bbcc7003368e206';

  collections = [
    {title: 'In motion', id: 182565},
    {title: 'Urban', id: 358545},
    {title: 'Colour', id: 923267},
  ];

  constructor(private http: HttpClient) { }

  getCollection(id: number) {
    return this.http.get(this.endpoint + '/collections/' + id + '/photos?client_id=' + this.appID, {
      headers: {
        'Expires': '10000000'
      }
    });
  }
}

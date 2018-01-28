import {Injectable} from '@angular/core';
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

  constructor(private http: HttpClient) {
  }

  getCollection(id: number, page = 1, items = 10, order = 'latest') {
    // return this.http.get('assets/json/358545.json');

    return this.http.get(this.endpoint +
      '/collections/' + id +
      '/photos?client_id=' + this.appID +
      '&page=' + page +
      '&per_page=' + items +
      '&order_by=' + order, {
      headers: {
        'Expires': '10000000'
      }
    });
  }

  getSinglePhoto(id: string) {
    // return this.http.get('assets/json/uYc-sDEVkV8.json');
    return this.http.get(this.endpoint +
      '/photos/' + id +
      '?client_id=' + this.appID);
  }

}

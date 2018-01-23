import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataService {

  private endpoint = 'https://api.unsplash.com';
  private appID = '92eb7437dd10b8effb710b186827c76f42ecca9edd05345b9bbcc7003368e206';

  private photos = new BehaviorSubject('');
  photosObsrv = this.photos.asObservable();

  constructor(private http: HttpClient) { }

  getCollection(id: number) {
    return this.http.get(this.endpoint + '/collections/' + id + '/photos?client_id=' + this.appID);
  }
}

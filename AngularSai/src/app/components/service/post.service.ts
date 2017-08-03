import { Injectable } from '@angular/core';
import {Http, Response}from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) {
  console.log('postservice intialized');
  }
  getPost() {
    return this.http.get('sample.json').map((res:Response)=>res.json());
  }
}

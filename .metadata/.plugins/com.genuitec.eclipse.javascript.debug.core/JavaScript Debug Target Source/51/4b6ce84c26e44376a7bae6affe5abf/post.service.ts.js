import { Injectable } from '@angular/core';
import {Http}from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http:Http) {
  console.log('postservice intialized');
  }
  getPost() {
    return this.http.get('sample.json').map(res=>res.json());
  }

}



// WEBPACK FOOTER //
// ./src/app/components/service/post.service.ts
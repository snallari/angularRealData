import { PostService } from '../service/post.service';
import {Component, OnInit} from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[PostService]
})
export class UserComponent {
  title: string;
  name: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];

  constructor(private postService:PostService) {
    this.title = 'Ms ';
    this.name = 'Shruti';
    this.address = {
      street: '7439 dover mill dr',
      city: 'Charlotte',
      state: 'NC'
    }
    this.hobbies = ['Music', 'Movies', 'Sports']
    this.showHobbies = false;
    this.postService.getPost().subscribe(post=> {
      this.posts=post;
    });

  }

  toggleHobbies() {
    if (this.showHobbies === true) {
      this.showHobbies = false;
    } else {
      this.showHobbies = true;
    }
  }

  addHobby(hobby) {
   this.hobbies.push(hobby);
  }
}
interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id:number;
  title:string;
  body:string;
}

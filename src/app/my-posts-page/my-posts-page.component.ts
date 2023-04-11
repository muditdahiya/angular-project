import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { IPost } from '../interfaces/Post';

@Component({
  selector: 'app-my-posts-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.css'],
})
export class MyPostsPageComponent implements OnInit {
  posts!: IPost[];

  constructor(private http: BackendServiceService) {}

  ngOnInit() {
    this.http.getPosts().subscribe((posts) => {
      this.posts = posts;

      // TODO filter posts by username

      console.log(posts);
    });
  }
}

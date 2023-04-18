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
    const username = localStorage.getItem('username'); // Get username from localStorage
    this.http.getPosts().subscribe((posts) => {
      // Filter posts by username
      this.posts = posts.filter(post => post.author === username);

      // Sort posts by latest first
      this.posts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      });

      console.log(this.posts);
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';
import { IPost } from '../interfaces/Post';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-my-posts-page',
  templateUrl: './my-posts-page.component.html',
  styleUrls: ['./my-posts-page.component.css'],
})
export class MyPostsPageComponent implements OnInit {
  posts!: IPost[];

  constructor(
    private http: BackendServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const username = localStorage.getItem('email'); // Get username from localStorag e
    console.log(username);
    this.http.getPosts().subscribe((posts) => {
      console.log(posts);

      this.posts = posts.filter(
        (post) => post.username === this.authService.userInfo.email
      );
    });
  }




  // ngOnInit() {
  //   this.http.getPosts().subscribe((posts) => {
  //     this.posts = posts;

  //     // TODO filter posts by username

  //     console.log(posts);
  //   });
  // }
}




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

  // ngOnInit() {
  //   const username = localStorage.getItem('email'); // Get username from localStorag e
  //   console.log(username);
  //   this.http.getPosts().subscribe((posts) => {
  //     console.log(posts);

  // ngOnInit() {
  //   this.http.getPosts().subscribe((posts) => {
  //     console.log(posts);
  //     console.log(this.authService.userInfo.email);
  //   }

  //     this.posts = posts.filter(
  //       (post) => post.username === this.authService.userInfo.email,

  //     // Sort posts by latest first
  //     this.posts.sort((a, b) => {
  //       const dateA = new Date(a.createdAt);
  //       const dateB = new Date(b.createdAt);
  //       return dateB.getTime() - dateA.getTime();
  //     });

  //     );
  //   });
  // }
  ngOnInit() {
    this.http.getPosts().subscribe((posts: IPost[]) => {
      console.log(posts);
      console.log(this.authService.userInfo.email);

      this.posts = posts.filter(
        (post: IPost) => post.username === this.authService.userInfo.email
      );

      // Sort posts by latest first
      this.posts.sort((a: IPost, b: IPost) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    });
  }
}

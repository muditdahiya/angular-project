import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/Post';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  posts!: IPost[];

  constructor(private http: BackendServiceService) {}

  ngOnInit() {
    this.http.getPosts().subscribe((posts) => {
      this.posts = posts.reverse();
      // console.log(posts);
    });
  }
}

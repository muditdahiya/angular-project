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
  posts$!: Observable<IPost[]>;
  title = 'Article by Jeetendra';
  posts: any;

  constructor(private http: BackendServiceService) {}

  ngOnInit(): void {
    this.http.getPosts().subscribe(
      (response) => {
        this.posts = response;
        console.log(this.posts);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/Post';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  posts$!: Observable<IPost[]>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.posts$ = this.http.get<IPost[]>(
      'http://muditdahiya.com/web-backend/api/posts'
    );
    // .map((data) => _.values(data))
    // .do(console.log);
  }
}

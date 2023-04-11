import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}

  private url = 'http://muditdahiya.com/web-backend';

  getPosts() {
    return this.http.get(this.url + '/api/posts');
  }
}

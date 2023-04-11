import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IPost } from '../interfaces/Post';
import { IFavourite } from '../interfaces/Favourite';

@Injectable({
  providedIn: 'root',
})
export class BackendServiceService {
  constructor(private http: HttpClient) {}

  private url = 'http://muditdahiya.com/web-backend';

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '/api/posts');
  }

  getFavs(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url + '/api/favs');
  }

  addFavs(username: string, postID: string): Observable<IFavourite[]> {
    return this.http
      .post<IFavourite[]>(this.url + `/api/add-fav/${postID}`, {
        username: username,
        postID: postID,
      })
      .pipe(tap((response: any) => response.json()));
  }
}

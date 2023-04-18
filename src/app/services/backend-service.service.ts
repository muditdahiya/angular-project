import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { IPost } from '../interfaces/Post';
import { IFavourite } from '../interfaces/Favourite';
import { IUser } from '../interfaces/IUser';
import { IContactUs } from '../interfaces/ContactUs';

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

  sendcontactus(data: IContactUs[]): Observable<any> {
    return this.http.post<IContactUs[]>(this.url + '/contactus', data);
  }

  createPost(title: string, tags: string, content: string): Observable<any> {
    const postData = { title: title, tags: tags, content: content };
    return this.http.post<any>(this.url + '/api/create-post', postData);

  }
  updateUser(
    fname: string,
    lname: string,
    email: string,
    id: string
  ): Observable<any> {
    return this.http
      .put<IUser[]>(this.url + `/api/update-user/${id}`, {
        fname: fname,
        lname: lname,
        email: email,
      })
      .pipe(
        tap((response: any) => {
          if (response == false) {
            alert('something went wrong! Please try again');
          } else {
            alert('User updated successfully!');
          }
        })
      );
  }
}

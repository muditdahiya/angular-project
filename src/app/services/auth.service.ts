import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs';
import { IAuth } from '../interfaces/IAuth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  static getItem(arg0: string) {
    throw new Error('Method not implemented.');
  }
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  private url: string = 'http://muditdahiya.com/web-backend/login';

  userInfo: any = {};

  constructor(private http: HttpClient) {
    const mytoken = localStorage.getItem('authToken');
    this._isLoggedIn$.next(!!mytoken);
  }
  login(email: string, password: string): Observable<IAuth> {
    return this.http
      .post<IAuth>(this.url, {
        email: email,
        password: password,
      })
      .pipe(
        tap((response: any) => {
          localStorage.setItem('authToken', response.token);
          this._isLoggedIn$.next(true);
        })
      );
  }
  logout() {
    this._isLoggedIn$.next(false);
    localStorage.removeItem('authToken');
  }

  mytoken = localStorage.getItem('authToken');
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': this.mytoken!,
    }),
  };


  
}





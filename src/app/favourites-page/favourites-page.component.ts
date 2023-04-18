import { Component, OnInit } from '@angular/core';
import { IPost } from '../interfaces/Post';
import { BackendServiceService } from '../services/backend-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-favourites-page',
  templateUrl: './favourites-page.component.html',
  styleUrls: ['./favourites-page.component.css'],
})
export class FavouritesPageComponent implements OnInit {
  favs!: IPost[];
  title = 'Favourites';
  email = this.authService.userInfo.email;

  constructor(
    private http: BackendServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.http.getFavs(this.email).subscribe((favs) => {
      this.favs = favs;
      console.log(favs);
    });
  }
}

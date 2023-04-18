import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/app/interfaces/Post';
import { BackendServiceService } from '../../services/backend-service.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: IPost | undefined;
  @Input() userFilter: string = '';
  @Input() titleFilter: string = '';
  email = this.authService.userInfo.email;
  favs!: IPost[];
  fav: any;

  constructor(
    private http: BackendServiceService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.http.getFavs(this.email).subscribe((favs) => {
      this.favs = favs;
    });
  }

  implementFav(id: any) {
    this.fav = this.favs.filter((fav) => fav._id === id);
    if (this.email) {
      if (this.fav.length == 0) {
        this.http.addFav(this.email, id).subscribe({
          error: (e) => {
            console.error();
          },
        });

        console.log('====================================');
        console.log('Fav has been added');
        console.log('====================================');
      } else {
        this.http.deleteFav(this.email, id).subscribe({
          error: (e) => {
            console.error();
          },
        });

        console.log('====================================');
        console.log('Fav has been deleted');
        console.log('====================================');
      }
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}

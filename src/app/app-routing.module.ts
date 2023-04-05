import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyPostsPageComponent } from './my-posts-page/my-posts-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SingupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'myposts', component: MyPostsPageComponent },
  { path: 'favourites', component: FavouritesPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contactus', component: ContactPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AddPostPageComponent } from './add-post-page/add-post-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MyPostsPageComponent } from './my-posts-page/my-posts-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { PostComponent } from './components/post/post.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AddPostPageComponent,
    ContactPageComponent,
    FavouritesPageComponent,
    LoginPageComponent,
    MyPostsPageComponent,
    ProfilePageComponent,
    SingupPageComponent,
    PostComponent,
    NavigationComponent,
    FavouritesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

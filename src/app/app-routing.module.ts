import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupPageComponent } from './singup-page/singup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'signup', component: SingupPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

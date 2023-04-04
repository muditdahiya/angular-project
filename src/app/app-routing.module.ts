import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupPageComponent } from './singup-page/singup-page.component'
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'signup', component: SingupPageComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

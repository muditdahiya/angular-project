import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  errorMessage: string = '';
  title = 'LOGIN';
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  loginForm = new FormGroup({
    email: new FormControl<string | null>('', Validators.required),
    password: new FormControl<string | null>('', Validators.required),
  });

  onSubmit() {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.authService.userInfo = res;
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          console.error();
          this.errorMessage = e.error.errors;
        },
      });
  }
}

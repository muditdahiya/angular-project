import { Component } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
 title="LOGIN"
 loginInfo=[{}];
 loginForm  = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),

});
onSubmit() {
  this.loginInfo.push({
    email: this.loginForm.value.email!,
    password: this.loginForm.value.password!,
    
  });
  console.log(this.loginInfo);
}
}

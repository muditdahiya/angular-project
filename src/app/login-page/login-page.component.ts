import { Component } from '@angular/core';
import { NgForm,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
 title="LOGIN PAGE"
 email='';
 password='';

onSubmit(form:NgForm){
  console.log(form.value);
  form.reset();
}
}

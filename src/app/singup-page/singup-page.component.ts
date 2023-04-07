import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent {
title='SIGNUP';
signupInfo=[{}];
 signupForm  = new FormGroup({
  fname:new FormControl('', Validators.required),
  lname:new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),

});
onSubmit() {
  this.signupInfo.push({
    fname:this.signupForm.value.fname!,
    lname:this.signupForm.value.lname!,
    email: this.signupForm.value.email!,
    password: this.signupForm.value.password!,
    
  });
  console.log(this.signupInfo);
}
}

import { BackendServiceService } from './../services/backend-service.service';
import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Isignup } from '../interfaces/Isignup';


@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent {
title='SIGNUP';

signupForm  = new FormGroup({
  fname:new FormControl('', Validators.required),
  lname:new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),

});
constructor(private BackendServiceService: BackendServiceService) {}
onSubmit() {
  const data:Isignup[]=[{
    fname:this.signupForm.value.fname!,
    lname:this.signupForm.value.lname!,
    email:this.signupForm.value.email!,
    password:this.signupForm.value.password!,
  }];
  this.BackendServiceService.signup(data)
  .subscribe(response => {
    console.log(response); 
    this.signupForm.reset();
  });
}
}


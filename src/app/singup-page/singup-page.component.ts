import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-singup-page',
  templateUrl: './singup-page.component.html',
  styleUrls: ['./singup-page.component.css']
})
export class SingupPageComponent {
title='SIGNUP PAGE';
fname='';
lname='';
email='';
password='';

onSubmit(form:NgForm){
  console.log(form.value);
  form.reset();
}
}

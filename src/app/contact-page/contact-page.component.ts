import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {
contactInfo=[{}];
contactForm  = new FormGroup({
  name:new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  subject:new FormControl('',Validators.required),
  message:new FormControl('',Validators.required),

});
onSubmit(){
  this.contactInfo.push({
  name:this.contactForm.value.name!,
  email: this.contactForm.value.email!,
  subject:this.contactForm.value.subject!,
  message:this.contactForm.value.message!,
    
  });
  console.log(this.contactInfo);
}
}

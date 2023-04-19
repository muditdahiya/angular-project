import { IContactUs } from './../interfaces/ContactUs';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css'],
})
export class ContactPageComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  constructor(private BackendServiceService: BackendServiceService) {}
  onSubmit() {
    const data: IContactUs[] = [
      {
        name: this.contactForm.value.name!,
        email: this.contactForm.value.email!,
        subject: this.contactForm.value.subject!,
        message: this.contactForm.value.message!,
      },
    ];
    console.log(data);
    this.BackendServiceService.sendcontactus(data).subscribe((response) => {
      console.log(response);
    });
    this.contactForm.reset();
  }
}

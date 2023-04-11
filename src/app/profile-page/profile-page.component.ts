import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent {
  title = 'Profile';
  fname = '';
  lname = '';
  email = '';
  accountInfo = [{}];

  deleteAccount() {
    console.log('====================================');
    console.log('Account has been deleted');
    console.log('====================================');
  }

  accountInfoReactive = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    lname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  updateAccount() {
    this.accountInfo.push({
      fname: this.accountInfoReactive.value.fname!,
      lname: this.accountInfoReactive.value.lname!,
      email: this.accountInfoReactive.value.email!,
    });

    console.log('====================================');
    console.log('Account has been updated');
    console.log('====================================');
  }
}

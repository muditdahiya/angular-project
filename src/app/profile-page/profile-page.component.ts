import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendServiceService } from '../services/backend-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  title = 'Profile';
  fname = this.authService.userInfo.fname;
  lname = this.authService.userInfo.lname;
  email = this.authService.userInfo.email;
  id = this.authService.userInfo._id;

  profile = [{}];

  constructor(
    private http: BackendServiceService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.profileForm.controls['fname'].setValue(this.fname);
    this.profileForm.controls['lname'].setValue(this.lname);
    this.profileForm.controls['email'].setValue(this.email);
  }

  profileForm = new FormGroup({
    fname: new FormControl<string | null>('', [Validators.required]),
    lname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>('', [
      Validators.required,
      Validators.email,
    ]),
  });

  updateAccount() {
    this.profile.push({
      fname: this.profileForm.value.fname!,
      lname: this.profileForm.value.lname!,
      email: this.profileForm.value.email!,
    });

    console.log('====================================');
    console.log('Account has been updated');
    console.log('====================================');
  }
}

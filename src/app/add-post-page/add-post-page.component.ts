import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css'],
})
export class AddPostPageComponent implements OnInit {
  postInfoReactive: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private backendService: BackendServiceService,
    private router: Router,
    private authService: AuthService
  ) {
    this.postInfoReactive = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    console.log(this.authService.userInfo.email);
  }

  addPost(): void {
    const title = this.postInfoReactive.value.title;
    const tags = this.postInfoReactive.value.tags;
    const content = this.postInfoReactive.value.description;

    this.backendService
      .createPost(
        title,
        tags,
        content,
        this.authService.userInfo.email,
        new Date(Date.now())
      )
      .subscribe(
        (response: any) => {
          console.log(response);
          this.postInfoReactive.reset();
          this.router.navigate(['/myposts']);
        },
        (error: any) => {
          console.error('Error while creating post:', error);
        }
      );
  }

  onSubmit(): void {
    this.addPost();
  }
}

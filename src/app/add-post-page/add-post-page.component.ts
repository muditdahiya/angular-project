import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent {
  postInfoReactive: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private backendService :BackendServiceService,
    private router: Router
  ) {
    this.postInfoReactive = this.formBuilder.group({
      title: ['', Validators.required],
      tags: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  addPost(): void {
    const title = this.postInfoReactive.value.title;
    const tags = this.postInfoReactive.value.tags;
    const content = this.postInfoReactive.value.description;

    this.backendService.createPost(title, tags, content).subscribe(
      (response: any) => {
        console.log('Post has been created');
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

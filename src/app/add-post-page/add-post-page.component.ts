import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post-page',
  templateUrl: './add-post-page.component.html',
  styleUrls: ['./add-post-page.component.css']
})
export class AddPostPageComponent {
  postInfoReactive: any;
  postInfo: any;
  addPost() {
    this.postInfo.push({
      title: this.postInfoReactive.value.title!,
      tags: this.postInfoReactive.value.tags!,
      description: this.postInfoReactive.value.description!,
    });
    console.log('Post has been created');
  }
  onSubmit(): void {
    console.log("Form submitted");
  }
}

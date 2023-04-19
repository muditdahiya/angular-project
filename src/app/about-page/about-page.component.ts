import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../services/backend-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css'],
})
export class AboutPageComponent implements OnInit {
  public aboutContent!: {
    title: string;
    content: string;
    content2: string;
    content3: string;
    content4: string;
  };

  constructor(private backendService: BackendServiceService) {}

  ngOnInit(): void {
    this.fetchAboutContent();
  }

  private fetchAboutContent(): void {
    this.backendService.getAboutContent().subscribe((data) => {
      this.aboutContent = data;
    });
  }
}

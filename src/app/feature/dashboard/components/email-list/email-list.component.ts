import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterServiceService } from '../../shared/services/newsletter-service.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
})
export class EmailListComponent implements OnInit {
  listNewsletters: any[] = [];

  constructor(
    private router: Router,
    private newsletterService: NewsletterServiceService
  ) {}

  ngOnInit(): void {
    this.getNewslettersList();
  }

  goSingle(data: any) {
    this.newsletterService.setNewsletterData = data;

    this.router.navigate(['/dashboard/emails/edit']);
  }

  deleteNewsletter(id: string) {
    this.newsletterService.deleteNewsletter(id).subscribe({
      next: (data) => {
        this.getNewslettersList();
      },
    });
  }

  getNewslettersList(): void {
    this.newsletterService.getNewsletters().subscribe({
      next: (data) => {
        this.listNewsletters = data;
      },
    });
  }
}

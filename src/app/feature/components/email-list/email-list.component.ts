import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsletterServiceService } from '../../shared/services/newsletter-service.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
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

    this.router.navigate(['/emails/edit']);
  }

  deleteNewsletter(id: string) {
    console.log('Id a eliminar: ', id);
    this.newsletterService.deleteNewsletter(id).subscribe({
      next: (data) => {
        console.log('RESULTADO DE LA ELIMINACION: ', data);
        this.getNewslettersList();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getNewslettersList(): void {
    this.newsletterService.getNewsletters().subscribe({
      next: (data) => {
        this.listNewsletters = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}

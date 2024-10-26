import { Component } from '@angular/core';
import { NewsletterService } from '../../shared/services/newsletter.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  value: string = '';
  value2: string = '';

  data1: FormGroup;

  data2: FormGroup;

  message1: string = '';

  message2: string = '';

  constructor(
    private newletterService: NewsletterService,
    formBuilder: FormBuilder
  ) {
    this.data1 = formBuilder.group({
      email: ['', Validators.required],
    });

    this.data2 = formBuilder.group({
      email: ['', Validators.required],
    });
  }

  sendData1(): void {
    this.data1.get('email')?.patchValue(this.value);

    if (this.data1.valid) {
      this.newletterService.createSubscriptor(this.value, 'promo').subscribe({
        next: (data) => {
          this.message1 = data.message;
        },
        error: (err) => {
          const { error } = err;
          this.message1 = error.error;
        },
      });
    }
  }

  sendData2(): void {
    this.data2.get('email')?.patchValue(this.value2);

    if (this.data2.valid) {
      this.newletterService
        .createSubscriptor(this.value2, 'noticias')
        .subscribe({
          next: (data) => {
            this.message2 = data.message;
          },
          error: (err) => {
            const { error } = err;
            this.message2 = error.error;
          },
        });
    }
  }
}

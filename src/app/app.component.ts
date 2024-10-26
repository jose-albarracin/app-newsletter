import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { SpinnerCounterService } from './core/services/spinner-counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.3s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterContentChecked {
  title = 'dashboardNewsletterApp';

  spiner!: boolean;

  constructor(
    private spinnerCounterService: SpinnerCounterService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
    this.spinnerCounterService.requestCount$.subscribe({
      next: (valor) => {
        this.spiner = valor ? true : false;
      },
    });
    this.changeDetector.detectChanges();
  }
}

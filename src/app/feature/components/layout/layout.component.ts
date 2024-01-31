import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { NewsletterServiceService } from '../../shared/services/newsletter-service.service';
import { SpinnerCounterService } from '../../shared/services/spinner-counter.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
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
export class LayoutComponent
  implements OnInit, AfterContentChecked, AfterViewInit
{
  spiner$ = this.spinnerCounterService.requestCount$;

  constructor(
    private spinnerCounterService: SpinnerCounterService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }
}

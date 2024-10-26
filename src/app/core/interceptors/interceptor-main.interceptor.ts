import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerCounterService } from '../services/spinner-counter.service';

@Injectable()
export class InterceptorMainInterceptor implements HttpInterceptor {
  constructor(private spinnerCounterService: SpinnerCounterService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.spinnerCounterService.increment();
    return next.handle(request).pipe(
      finalize(() => {
        this.spinnerCounterService.decrement();
      })
    );
  }
}

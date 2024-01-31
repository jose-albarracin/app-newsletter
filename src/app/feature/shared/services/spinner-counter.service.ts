import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerCounterService {
  private requestCount = 0;
  private requestCountSubject = new BehaviorSubject<number>(0);

  get requestCount$() {
    return this.requestCountSubject.asObservable();
  }

  increment() {
    this.requestCount++;
    this.requestCountSubject.next(this.requestCount);
  }

  decrement() {
    this.requestCount--;
    this.requestCountSubject.next(this.requestCount);
  }
}

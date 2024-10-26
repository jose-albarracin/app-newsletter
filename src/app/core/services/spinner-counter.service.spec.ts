import { TestBed } from '@angular/core/testing';

import { SpinnerCounterService } from './spinner-counter.service';

describe('SpinnerCounterService', () => {
  let service: SpinnerCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InterceptorMainInterceptor } from './interceptor-main.interceptor';

describe('InterceptorMainInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorMainInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorMainInterceptor = TestBed.inject(InterceptorMainInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

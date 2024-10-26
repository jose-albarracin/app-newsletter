import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNewsletterComponent } from './email-newsletter.component';

describe('EmailNewsletterComponent', () => {
  let component: EmailNewsletterComponent;
  let fixture: ComponentFixture<EmailNewsletterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailNewsletterComponent]
    });
    fixture = TestBed.createComponent(EmailNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

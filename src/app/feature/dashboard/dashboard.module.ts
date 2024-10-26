import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailNewsletterComponent } from './components/email-newsletter/email-newsletter.component';

@NgModule({
  declarations: [EmailListComponent, EmailNewsletterComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class DashboardModule {}

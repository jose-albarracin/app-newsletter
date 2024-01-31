import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { EmailNewsletterComponent } from './components/email-newsletter/email-newsletter.component';
import { CoreModule } from '../core/core.module';
import { EmailListComponent } from './components/email-list/email-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    EmailNewsletterComponent,
    EmailListComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class FeatureModule {}

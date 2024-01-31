import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { EmailNewsletterComponent } from './components/email-newsletter/email-newsletter.component';
import { EmailListComponent } from './components/email-list/email-list.component';

const routes: Routes = [
  {
    path: 'emails',
    component: EmailListComponent,
  },
  {
    path: 'emails/:action',
    component: EmailNewsletterComponent,
  },
  { path: '**', redirectTo: 'emails', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureRoutingModule {}

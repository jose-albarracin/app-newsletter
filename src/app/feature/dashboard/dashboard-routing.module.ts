import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailListComponent } from './components/email-list/email-list.component';
import { EmailNewsletterComponent } from './components/email-newsletter/email-newsletter.component';

const routes: Routes = [
  {
    path: '',
    component: EmailListComponent,
  },
  {
    path: 'emails/:action',
    component: EmailNewsletterComponent,
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

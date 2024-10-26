import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StateSubscriberComponent } from './components/state-subscriber/state-subscriber.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'subscriber/:email',
    component: StateSubscriberComponent,
  },
  /* {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  }, */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

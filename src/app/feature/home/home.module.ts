import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { StateSubscriberComponent } from './components/state-subscriber/state-subscriber.component';

@NgModule({
  declarations: [HomeComponent, StateSubscriberComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class HomeModule {}

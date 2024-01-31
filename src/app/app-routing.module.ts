import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './feature/components/layout/layout.component';

const MAIN = '/emails';
const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./feature/feature.module').then((i) => i.FeatureModule),
  },
  { path: '**', redirectTo: MAIN, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

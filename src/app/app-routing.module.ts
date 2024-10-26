import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const MAIN = '/home';
const routes: Routes = [
  { path: '', redirectTo: MAIN, pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./feature/home/home.module').then((i) => i.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/dashboard/dashboard.module').then(
            (i) => i.DashboardModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: MAIN, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

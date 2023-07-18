import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage)
  },
];

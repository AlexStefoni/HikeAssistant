import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./trails/trails.page').then( m => m.TrailsPage)
    //loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage)
  },
  {
    path: 'trails',
    loadComponent: () => import('./trails/trails.page').then( m => m.TrailsPage)
  },
];

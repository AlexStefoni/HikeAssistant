import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule,} from '@angular/router';
export const routes: Routes = [
  
  {
    path: '',
    loadComponent: () => import('./title-page/title-page.page').then( m => m.TitlePagePage)
    //loadComponent: () => import('./trails/trails.page').then( m => m.TrailsPage)
    //loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage)
  },
  {
    path: 'trails',
    loadComponent: () => import('./trails/trails.page').then( m => m.TrailsPage)
  },
  {
    path: 'trail-details',
    loadComponent: () => import('./trail-details/trail-details.page').then( m => m.TrailDetailsPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
  {
    path: 'menu-user',
    loadComponent: () => import('./menu-user/menu-user.page').then( m => m.MenuUserPage)
  },
  {
    path: 'start-page',
    loadComponent: () => import('./start-page/start-page.page').then( m => m.StartPagePage)
  },
  {
    path: 'register-tab',
    loadComponent: () => import('./register-tab/register-tab.page').then( m => m.RegisterTabPage)
  },
  {
    path: 'log-in',
    loadComponent: () => import('./log-in/log-in.page').then( m => m.LogInPage)
  },
  {
    path: 'title-page',
    loadComponent: () => import('./title-page/title-page.page').then( m => m.TitlePagePage)
  }



];

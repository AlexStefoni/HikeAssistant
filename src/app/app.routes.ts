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
  },  {
    path: 'user',
    loadComponent: () => import('./user/user.page').then( m => m.UserPage)
  },
  {
    path: 'add-trail',
    loadComponent: () => import('./add-trail/add-trail.page').then( m => m.AddTrailPage)
  },
  {
    path: 'local-tips',
    loadComponent: () => import('./local-tips/local-tips.page').then( m => m.LocalTipsPage)
  },
  {
    path: 'recommendations',
    loadComponent: () => import('./recommendations/recommendations.page').then( m => m.RecommendationsPage)
  },
  {
    path: 'add-trails',
    loadComponent: () => import('./add-trails/add-trails.page').then( m => m.AddTrailsPage)
  },
  {
    path: 'account-list',
    loadComponent: () => import('./account-list/account-list.page').then( m => m.AccountListPage)
  },
  {
    path: 'personal-trails',
    loadComponent: () => import('./personal-trails/personal-trails.page').then( m => m.PersonalTrailsPage)
  },
  {
    path: 'ethicspage',
    loadComponent: () => import('./ethicspage/ethicspage.page').then( m => m.EthicspagePage)
  }




];

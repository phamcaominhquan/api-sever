import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent:() => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'detail/:id',
    loadComponent:() => import('./pages/detail/detail.component').then(m => m.DetailComponent),
  },
  {
    path: 'login',
    loadComponent:() => import('./pages/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full',
  }
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'register',
    canActivateChild: [AuthGuardService],
    loadChildren: './modules/register/register.module#RegisterModule',
  },
  {
    path: 'profile',
    canActivateChild: [AuthGuardService],
    loadChildren: './modules/profile/profile.module#ProfileModule',
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
  },
  {
    path: 'attend',
    loadChildren: './modules/attend/attend.module#AttendModule',
  },
  {
    path: 'success',
    loadChildren: './modules/success/success.module#SuccessModule',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

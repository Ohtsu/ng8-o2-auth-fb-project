import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { environment } from '../environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/' + environment.o2AuthService.redirectPath.dashboardPath, pathMatch: 'full'},
  { path: environment.o2AuthService.redirectPath.signInPath, component: SignInComponent},
  { path: environment.o2AuthService.redirectPath.registerUserPath, component: SignUpComponent},
  { path: environment.o2AuthService.redirectPath.dashboardPath, component: DashboardComponent },
  { path: environment.o2AuthService.redirectPath.forgotPasswordPath, component: ForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

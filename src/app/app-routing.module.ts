import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { DashboardComponent } from './secured/dashboard/dashboard.component';
import { AccountDetailsComponent } from './secured/account-details/account-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'secure',
    redirectTo: 'secure/accounts/dashboard',
    pathMatch: 'full'
  },
  { path: 'secure/accounts/dashboard', component: DashboardComponent },
  { path: 'secure/accounts/details', component: AccountDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { LoginFormComponent } from './public/login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './secured/dashboard/dashboard.component';
import { SidebarComponent } from './secured/sidebar/sidebar.component';
import { AccountTypeAccordianTextPipe } from './pipes/account-type-accordian-text.pipe';
import { GetAccountsOfACategoryPipe } from './pipes/get-accounts-of-acategory.pipe';
import { AccountDetailsComponent } from './secured/account-details/account-details.component';
import { OpenAccountComponent } from './public/open-account/open-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LoginFormComponent,
    DashboardComponent,
    SidebarComponent,
    AccountTypeAccordianTextPipe,
    GetAccountsOfACategoryPipe,
    AccountDetailsComponent,
    OpenAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

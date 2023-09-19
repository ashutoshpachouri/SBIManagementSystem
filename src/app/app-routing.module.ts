import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InternetBankingComponent } from './components/internet-banking/internet-banking.component';
import { AccountsComponent } from './components/accounts/accounts.component';

const routes: Routes = [
  { path: 'accounts', component: AccountsComponent },
  { path: 'internetBanking', component: InternetBankingComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/internetBanking', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {AuthGuardService} from './services/auth-guard.service';
import {FinancedocinputComponent} from './financedocinput/financedocinput.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SigninComponent },
  { path: 'findocdetail/:id', component: FinancedocinputComponent,  canActivate: [AuthGuardService] },
  { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

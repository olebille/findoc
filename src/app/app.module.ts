import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { SigninComponent } from './signin/signin.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AuthService} from './auth/auth.service';
import { WelcomeComponent } from './welcome/welcome.component';
import {AuthGuardService} from './services/auth-guard.service';
import {FindocService} from './services/findoc.service';
import { FinancedocstableComponent } from './financedocstable/financedocstable.component';
import { FinancedocinputComponent } from './financedocinput/financedocinput.component';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    WelcomeComponent,
    FinancedocstableComponent,
    FinancedocinputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService, FindocService],
  bootstrap: [AppComponent]
})
export class AppModule { }

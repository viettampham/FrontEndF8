import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    SigninComponent,
    RegistrationComponent
  ],
  exports: [
    SigninComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class LoginModule { }

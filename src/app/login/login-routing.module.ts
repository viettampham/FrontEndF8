import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {RegistrationComponent} from "./registration/registration.component";

const routes: Routes = [
  {path:'',component:SigninComponent},
  {path:'registration',component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

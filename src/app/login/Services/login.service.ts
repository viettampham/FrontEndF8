import { Injectable } from '@angular/core';
import {LoginRequest} from "../Models/LoginRequest";
import {HttpClient} from "@angular/common/http";
import {LoginResponse} from "../Models/LoginResponse";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }
  Signin = (request:LoginRequest) => this.httpClient.post<LoginResponse>(`${environment.api_domain}/Authentication/Login`,request);

}

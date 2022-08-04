import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegistrationRequest} from "../Models/RegistrationRequest";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
  registration = (request:RegistrationRequest) => this.httpClient.post(`${environment.api_domain}/Authentication/Registration`,request);
}

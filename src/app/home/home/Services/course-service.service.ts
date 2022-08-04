import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Course} from "../../Models/Course-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private httpClient:HttpClient) { }
  getlistcourse = () =>this.httpClient.get<Course[]>(`${environment.api_domain}/Course/Get-all-list`);
}

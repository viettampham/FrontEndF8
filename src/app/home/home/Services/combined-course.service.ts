import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CombinedCourse} from "../../Models/CombinedCourse";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CombinedCourseService {

  constructor(private httpClient:HttpClient) { }

  getListCombinedCourse = () => this.httpClient.get<CombinedCourse[]>(`${environment.api_domain}/CombinedCourse/get-list-combined-course`);
}

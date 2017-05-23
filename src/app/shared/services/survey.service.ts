import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from "../../../environments/environment";
// import {Survey} from "../classes/survey";
import {Observable} from "rxjs";

@Injectable()
export class SurveyService {

  constructor(private http:Http) { }

  
  getSurveys(): Observable<any[]> {
    return this.http
      .get(`${environment.API}/surveys`)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }

  getSurvey(id): Observable<any> {
    return this.http
      .get(`${environment.API}/surveys/${id}`)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }

  createSurvey(surveyResponse): Observable<any> {
    let data = {
      survey: surveyResponse
    }
    return this.http
      .post(`${environment.API}/surveys`, data)
      .map(res => res.json())
      .catch(error => Observable.of(error))
  }

}

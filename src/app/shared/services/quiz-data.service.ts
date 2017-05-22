import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

import {QuizData} from "../classes/quiz-data";
import {Survey} from '../classes/survey';

@Injectable()
export class QuizDataService {

  constructor(private _http:Http) { }

  getQuizData(): QuizData {
    // return this._http
    //   .get(`${environment.API}/quiz-data`)
    //   .map(res => res.json())
    //   .catch(error => Observable.of(error))
    return new QuizData();    
  }
}
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms'
// import {AuthService} from '../shared/services/auth.service'
import {Observable, Subject} from "rxjs";
import {QuizDataService} from '../shared/services/quiz-data.service';

@Component({
  selector: 'survey-sign-up',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: []
})
export class QuizComponent {

  public signUpForm: FormGroup;
  public formSubmitted: boolean = false;
  public validatorSubject: Subject<any>;
  public quiz;

  constructor(
    private _fb:FormBuilder,
    private quizDataService: QuizDataService 
  ) {
    this.quiz = this.quizDataService.getQuizData();

    console.log('QUIZ DATA');
    console.log(this.quiz);
    console.log('QUIZ DATA');
    
  }
}

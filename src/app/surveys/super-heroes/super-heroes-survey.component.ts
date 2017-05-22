import { Component }              from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import {SurveyQuestion} from '../../shared/classes/question';
import {QuizDataService} from '../../shared/services/quiz-data.service';

@Component({
  selector: 'super-heroes-survey',
  templateUrl: './super-heroes-survey.component.html'
})

export class SuperHeroesSurveyComponent {
    // surveyQuestions: SurveyQuestion;
    quiz;    
    constructor(private quizDataService : QuizDataService) {
        // this.surveyQuestions = this.quizDataService.getQuizData();
        this.quiz = this.quizDataService.getQuizData();
    }

}
import { Component }              from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {QuizDataService} from '../../shared/services/quiz-data.service';

@Component({
  selector: 'super-heroes-survey',
  templateUrl: './super-heroes-survey.component.html',
  styleUrls: ['./super-heroes-survey.component.scss']
})

export class SuperHeroesSurveyComponent {
    quiz;
    surveyResponse:any = {};
    submitted = false;
    constructor(private quizDataService : QuizDataService) {        
        this.quiz = this.quizDataService.getQuizData();                
    }
    selectAnswer(surveyQuestion, answer){
        this.surveyResponse[surveyQuestion.question] = {};
        this.surveyResponse[surveyQuestion.question].userAnswer = answer;
        this.surveyResponse[surveyQuestion.question].correctAnswer = surveyQuestion.answers[surveyQuestion.correct-1];
        console.log('SELECT ANSWER');
        console.log(this.surveyResponse[surveyQuestion.question]);
        console.log('SELECT ANSWER');
    }

    onSubmit(event) {
        this.submitted = true;
        console.log('SUMBIT SURVEY ....');
        console.log(this.surveyResponse);     
        console.log('SUMBIT SURVEY ....');
        // this.router.navigate(['/survey-results']);
    }

}


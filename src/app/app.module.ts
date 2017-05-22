import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {SurveyService} from "./shared/services/survey.service";
import {SurveysResolver} from "./shared/resolvers/surveys-resolver";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quizzes/quiz.component';
import { SuperHeroesSurveyComponent } from './surveys/super-heroes/super-heroes-survey.component';

import { QuizDataService } from './shared/services/quiz-data.service';
import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,    
    SuperHeroesSurveyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [    
    SurveysResolver,    
    SurveyService,
    QuizDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

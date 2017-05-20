import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdToolbarModule,MdToolbarRow } from '@angular/material';
import {SurveyService} from "./shared/services/survey.service";
import {SurveysResolver} from "./shared/resolvers/surveys-resolver";
// import { Angular2TokenService } from '@angular/token';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quizzes/quiz.component';

import {routes} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [    
    SurveysResolver,    
    SurveyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

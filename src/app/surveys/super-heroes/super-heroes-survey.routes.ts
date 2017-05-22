import { Route } from '@angular/router';
import { SuperHeroesSurveyComponent } from './super-heroes-survey.component'

export const SuperHeroesSurveyRouter: Route[] = [
  {
    path: 'surveys/super-heroes',
    component: SuperHeroesSurveyComponent
  }

];

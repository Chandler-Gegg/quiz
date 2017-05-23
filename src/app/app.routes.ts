import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { QuizRoutes } from './quizzes/quiz.routes';
import { SurveyResultsRoutes } from './survey-results/survey-results.routes';

export const routes: Routes = [
    ...HomeRoutes,
    ...QuizRoutes,
    ...SurveyResultsRoutes

//   ...SignUpRoutes,
//   ...SignInRoutes,
//   ...FormsRouter
];

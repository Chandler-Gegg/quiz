import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { QuizRoutes } from './quizzes/quiz.routes';

export const routes: Routes = [
    ...HomeRoutes,
    ...QuizRoutes
//   ...SignUpRoutes,
//   ...SignInRoutes,
//   ...FormsRouter
];

import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.routes';
import { QuizzesRoutes } from './quizzes/quizzes.routes';

export const routes: Routes = [
    ...HomeRoutes,
    ...QuizzesRoutes
//   ...SignUpRoutes,
//   ...SignInRoutes,
//   ...FormsRouter
];

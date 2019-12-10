import {Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { QuizComponent } from './quiz/quiz.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { ResultComponent } from './result/result.component';
import { CategoryComponent } from './category/category.component';

export const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'quiz1', component: Quiz1Component},
  {path: 'quiz2', component: Quiz2Component},
  {path: 'result', component: ResultComponent},
  {path: 'category', component: CategoryComponent},
  {path: '', redirectTo: '/register', pathMatch: 'full'}
];

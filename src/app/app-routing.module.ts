import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { CreateComponent } from './routes/create/create.component';
import { SetupComponent } from './routes/setup/setup.component';
import { AddQuestionComponent } from './routes/add-question/add-question.component';
import { SavedComponent } from './routes/saved/saved.component';
import { QuizzComponent } from './routes/quizz/quizz.component';
import { QuestionComponent } from './routes/question/question.component';
import { ScoreComponent } from './routes/score/score.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'create', component: CreateComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'saved', component: SavedComponent },
  { path: 'quizz', component: QuizzComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'score', component: ScoreComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

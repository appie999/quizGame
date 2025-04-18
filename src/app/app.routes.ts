import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {HistoriqueComponent} from './historique/historique.component';
import {QuizComponent} from './quiz/quiz.component';
import {ResultatComponent} from './resultat/resultat.component';

export const routes: Routes = [
  {path : 'accueil', component: AccueilComponent},
  {path : 'historique' , component: HistoriqueComponent},
  {path : 'quiz' , component : QuizComponent},
  {path : 'resultat', component: ResultatComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
];

import { Routes } from '@angular/router';
import {AccueilComponent} from './accueil/accueil.component';
import {HistoriqueComponent} from './historique/historique.component';

export const routes: Routes = [
  // {path: "**", component: AccueilComponent},
  {path : "accueil", component: AccueilComponent},
  {path : "historique" , component: HistoriqueComponent},
];

import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-historique',
  imports: [CommonModule],
  templateUrl: './historique.component.html',
  styleUrl: './historique.component.css',
  template: `

  `
})
export class HistoriqueComponent implements OnInit{
  historique : any [] = [];

  ngOnInit(): void {
    this.historique = JSON.parse(localStorage.getItem('quiz-history') || '[]')
  }


}

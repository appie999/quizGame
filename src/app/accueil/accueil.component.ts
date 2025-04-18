import {Component, OnInit} from '@angular/core';
import {TriviaService} from '../services/trivia.service';
import {Router} from 'express';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-accueil',
  imports: [
    FormsModule
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent implements OnInit{

  categories: any[] = [];
  category: number = 9;
  difficulty: string = 'easy';

  constructor(private triviaService : TriviaService, private router: Router ) {}

  ngOnInit(): void {
    this.triviaService.getQuestions().subscribe(data =>{
      this.categories = data.trivia_categories;
    });
  }
  startQuiz(){
    localStorage.setItem(('quiz-settings'), JSON.stringify({category : this.category , difficulty: this.difficulty}));
    // this.router.navigate(['/quiz']);
  }
}

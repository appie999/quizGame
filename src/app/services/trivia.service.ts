import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TriviaService {
  private apiUrl = 'https://opentdb.com/api.php?amount=7';
  constructor(private http: HttpClient) { }


  getQuestions(amount: number = 10, category?: number, difficulty?: string, type: string = 'multiple'): Observable<any> {
    let url = `${this.apiUrl}?amount=${amount}&type=${type}`;
    if (category) url += `&category=${category}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    return this.http.get<any>(url);
  }

}



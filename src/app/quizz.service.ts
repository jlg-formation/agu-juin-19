import { Injectable } from '@angular/core';
import { Quizz, Question } from './quizz';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {
  
  current: Quizz;

  constructor() {
    const str = localStorage.getItem('current');
    if (!str) {
      return;
    }
    const q = new Quizz();
    Object.assign(q, JSON.parse(str));
    this.current = q;
  }

  createCurrent(name: string) {
    this.current = new Quizz();
    this.current.name = name;
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
  }


}

import { Injectable } from '@angular/core';
import { Quizz, Question } from './quizz';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;
  list = {};

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
    this.syncCurrent();
  }

  addQuestion(question: Question) {
    this.current.questions.push(question);
    this.syncCurrent();
  }

  syncCurrent() {
    localStorage.setItem('current', JSON.stringify(this.current));
  }

  saveCurrent() {
    const str = localStorage.getItem('list');
    if (str) {
      this.list = JSON.parse(str);
    }
    this.list[this.current.name] = this.current;
    localStorage.setItem('list', JSON.stringify(this.list));
  }


}

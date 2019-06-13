import { Injectable } from '@angular/core';
import { Quizz, Question } from './quizz';



@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;
  list = {};

  constructor() {
    this.retrieveCurrent();
    this.retrieveList();
  }

  retrieveCurrent() {
    const str = localStorage.getItem('current');
    if (!str) {
      return;
    }
    const q = new Quizz();
    Object.assign(q, JSON.parse(str));
    this.current = q;
  }

  retrieveList() {
    const str = localStorage.getItem('list');
    if (!str) {
      return;
    }
    const list = JSON.parse(str);
    // tslint:disable-next-line: forin
    for (const name in list) {
      list[name].__proto__ = Quizz.prototype;
    }
    this.list = list;
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

  hasQuizz() {
    return Object.keys(this.list).length > 0;
  }


}

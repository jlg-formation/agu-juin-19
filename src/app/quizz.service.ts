import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current: Quizz;

  constructor() { }

  createCurrent(name: string) {
    this.current = new Quizz(name);
  }

}

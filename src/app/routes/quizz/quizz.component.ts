import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Quizz } from 'src/app/quizz';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  constructor(
    public quizz: QuizzService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  startQuizz(q: Quizz) {
    this.quizz.current = q;
    this.quizz.syncCurrent();
    this.router.navigate(['/', q.name, 'question']);
  }

}

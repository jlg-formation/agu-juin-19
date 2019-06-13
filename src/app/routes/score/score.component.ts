import { Component, OnInit } from '@angular/core';
import { faSmile, faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { faPoo } from '@fortawesome/free-solid-svg-icons';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  icon = faSmile;

  constructor(
    public quizz: QuizzService
  ) { }

  ngOnInit() {
    if (this.quizz.progress.score === 0) {
      this.icon = faPoo;
    }
    if (this.quizz.progress.score === this.quizz.current.questions.length) {
      this.icon = faSmileWink;
    }
  }

}

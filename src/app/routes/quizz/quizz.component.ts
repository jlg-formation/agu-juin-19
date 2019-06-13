import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  constructor(
    public quizz: QuizzService
  ) { }

  ngOnInit() {
  }

}

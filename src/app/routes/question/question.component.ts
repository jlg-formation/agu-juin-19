import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  f = new FormGroup({
    answer: new FormControl('', Validators.required)
  });
  constructor(
    public quizz: QuizzService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    if (this.quizz.current.questions[this.quizz.progress.questionId].correctAnswer
      === this.f.value.answer) {
        this.quizz.progress.score++;
    }
    this.quizz.progress.questionId++;
    this.quizz.syncProgress();
    if (this.quizz.progress.questionId === this.quizz.current.questions.length) {
      this.router.navigateByUrl('/score');
      return;
    }
    this.f.reset();
  }

}

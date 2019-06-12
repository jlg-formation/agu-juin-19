import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('Quelle est la capitale de la France ?', [Validators.required]),
    answerA: new FormControl('Berlin', [Validators.required]),
    answerB: new FormControl('Paris', [Validators.required]),
    answerC: new FormControl('Rome', [Validators.required]),
    answerD: new FormControl('Londres', [Validators.required]),
    correctAnswer: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit() {
  }

}

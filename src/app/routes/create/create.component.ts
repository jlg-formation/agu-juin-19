import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizzService } from 'src/app/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  f = new FormGroup({
    name: new FormControl('titi', Validators.required),
  });
  constructor(
    private quizz: QuizzService,
    private router: Router) { }

  ngOnInit() {
  }

  submit() {
    console.log('submit');
    this.quizz.createCurrent(this.f.value.name);
    this.router.navigateByUrl('/setup');
  }

}

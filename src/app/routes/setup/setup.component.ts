import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(
    public quizz: QuizzService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  save() {
    console.log('about to save the quizz');
    this.quizz.saveCurrent();
    this.router.navigateByUrl('/saved');
  }

}

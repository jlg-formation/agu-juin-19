import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { environment } from 'src/environments/environment';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
    this.http.get(environment.serverUrl).subscribe({
      next: data => {
        console.log('sync successfull get.');
        // tslint:disable-next-line: forin
        for (const name in data) {
          data[name].__proto__ = Quizz.prototype;
        }
        this.list = data;
        localStorage.setItem('list', JSON.stringify(this.list));
      },
      error: e => {
        window.alert('Sync non fonctionnelle, mode dégradé');
      }
    });
  }

  saveCurrent() {
    super.saveCurrent();
    this.http.post(environment.serverUrl, this.list).subscribe({
      next: () => console.log('sync successfull.'),
      error: e => console.error('sync failed', e),
    });
  }
}

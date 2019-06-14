import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuizzService } from './quizz.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizzHttpService extends QuizzService {

  constructor(private http: HttpClient) {
    super();
  }

  saveCurrent() {
    super.saveCurrent();
    this.http.post(environment.serverUrl, this.list).subscribe({
      next: () => console.log('sync successfull.'),
      error: e => console.error('sync failed', e),
    });
  }
}

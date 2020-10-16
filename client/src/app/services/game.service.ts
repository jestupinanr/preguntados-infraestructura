import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URI= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get(`${this.API_URI}/game`);
  }
  saveScore (id : number, score : number){
    console.log("entre2");
    return this.http.post('${this.API_URI}/game/${id}', score);
  }
}

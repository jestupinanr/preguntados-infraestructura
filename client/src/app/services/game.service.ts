import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {score} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  API_URI= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get(`${this.API_URI}/game`);
  }
  CreatePerson(data: score){
    console.log("entre");
    return this.http.post(`${this.API_URI}/game`, data);
  }
  getRanking() {
    return this.http.get(`${this.API_URI}/game/ranking`);
  }
}

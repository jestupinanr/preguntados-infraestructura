import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {personForm,personSignIn} from '../models/person'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  API_URI= 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

    getUltimatePerson() {
      return this.http.get(`${this.API_URI}/person`);
    }
    CreatePerson(person: personForm){
      return this.http.post(`${this.API_URI}/person`, person);
    }
    getPersons (){
      return this.http.get('${this.API_URI}/iniciarsesion/${id}');
    }
   /* getPersons (id:string){
      return this.http.get('${this.API_URI}/iniciarsesion/${id}');
    }
    
    deletePerson(id: string){
      return this.http.delete('${this.API_URI}/iniciardesesion/${id}')
    }
     confirmateSingIn(data: personSignIn){
      return this.http.post(`${this.API_URI}/iniciarsesion/`, data);
    }
    }
    updatePerson(id: string, updatePerson: Person):Observable <Person>{
      return this.http.put('${this.API_URI}/iniciarsesion/${id}', updatePerson);
    }*/
}

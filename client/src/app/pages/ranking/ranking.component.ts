import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-list',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private personService: PersonService,
              private router: Router) {

               }

  person : any = [];
  ngOnInit(): void {
    this.personService.getPersons().subscribe(
      res => {
        this.person = res;
      },
      err => console.error(err)
    );
  }

  //FUNCIÓN PARA ENRUTAR COMPONENTES MEDIANTE BOTONES
  addEmploye(){
    this.router.navigate( ['/agregar-empleado'] );
  }

}

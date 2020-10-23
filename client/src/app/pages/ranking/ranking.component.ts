import { Component, OnInit } from '@angular/core';

import { PersonService } from '../../services/person.service';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-list',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor(private GameService: GameService,
              private router: Router) {

               }

  allRanking : any = [];
  topRanking : any = [];
  ngOnInit(): void {
    this.GameService.getRanking().subscribe(
      res => {
        this.allRanking = res;
        this.getTopRanking();
        console.log(res);
      },
      err => console.error(err)
    );
  }
  getTopRanking(){
    
  }
  //FUNCIÓN PARA ENRUTAR COMPONENTES MEDIANTE BOTONES
  addEmploye(){
    this.router.navigate( ['/agregar-empleado'] );
  }

}

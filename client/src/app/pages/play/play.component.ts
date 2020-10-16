import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';

import {GameService} from '../../services/game.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private GameService: GameService,
              private router: Router, private rutaActiva: ActivatedRoute ) { }

    datosUrl:{ id: number};
    question : any = [];
    empezar: Boolean = false;
    questionAnswer = 0;
    time = 0;
    startTime = timer();
    endTime =0;
    score = 1000;
    lapsoTime = 0;
    
  ngOnInit(): void {
    this.datosUrl= {
      id:+this.rutaActiva.snapshot.paramMap.get('id')
    };
    console.log(this.datosUrl);
    this.GameService.getAllQuestions().subscribe(
      res => {
        var i=0;
        var questions: any = [];
        this.question = res;
        console.log(this.question);
      },
      err => console.log(err)
    )
  }
  empezarJuego(){
    this.empezar=true;
    this.startTime = timer(1000, 1000);
    this.startTime.subscribe(x => 
      this.time =x
    );

  }

  saberRespuesta (idQ?:number, idOp?:number) {
    var rta = this.question[idQ].respuesta;
    if (rta == idOp){
      const opcion = document.querySelector('#op'+idQ+idOp+'');
      opcion.setAttribute('class', 'btn btn-outline-success btn-block');
      opcion.setAttribute("disabled", "disabled");
      this.score = this.score+100;
    }else{
      const noRta = document.querySelector('#op'+idQ+idOp+'');
      noRta.setAttribute('class', 'btn btn-outline-danger btn-block');
      this.score = this.score+20;
    }
    //al score restarle el tiempo que duro resolviendo la pregunta, se supone que entre mas rapdio mas puntos gana
    this.score=this.score-(this.time-this.lapsoTime);
    this.lapsoTime = this.time;
    //deshabilitar respuesta
    for (var i = 1; i <=4; i++){
      if (i != idOp){
        const noRta = document.querySelector('#op'+idQ+i+'');
        noRta.setAttribute('class', 'btn btn-outline-dark btn-block');
        noRta.setAttribute("disabled", "disabled");
      }
    }
    //si ya no hay mas preguntas entonces se acaba el juego
    this.questionAnswer = this.questionAnswer+1;
    if(this.questionAnswer == this.question.length){
      this.finDeljuego();
    }
  }

  finDeljuego(){
    //guardar tiempo final
    this.endTime = this.time;
    //mostrar mensaje con el resultado 
    Swal.fire({
      title: '¡Terminaste el juego! \n tu puntaje es',
      html: '<h2>'+this.score+' Puntos </h2><br> <h2>en '+this.endTime+' Segundos</h2>',
      width: 600,
      padding: '3em',
      backdrop: `
        url("http://azgif.com/wp-content/uploads/2019/12/Gif-fuegos-artificiales-de-a%C3%B1o-nuevo.gif")
        left top
        no-repeat`,
    })
    this.guardarScore()
  }
  guardarScore (){
    console.log("entre1");
    this.GameService.saveScore(this.datosUrl.id, this.score);
  }
}

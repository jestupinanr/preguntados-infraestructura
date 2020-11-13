import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import {score} from '../../models/game'

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
//variables de la clase
    datosUrl:{ id: number};
    question : any = [];
    empezar: Boolean = false;
    questionAnswer = 0;
    time = 0;
    startTime = timer();
    subscription = timer();
    endTime =0;
    scoreGame = 0;
    lapsoTime = 0;
    questionNumber = 0;
//objeto score
    score: score = {
      id_person : -1,
      scoreEnd : -1
    };
    
  ngOnInit(): void {
    this.datosUrl= {
      id:+this.rutaActiva.snapshot.paramMap.get('id')
    };
    this.GameService.getAllQuestions().subscribe(
      res => {
        var questions: any = [];
        this.question = res;
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
    setTimeout(() => {
      this.mostrarTarjeta();
      //this.habilitarRespuesta()
     }, 10);
  }
  /*habilitarRespuesta(){
    for (var i = 1 ; i <=4 ; i++){
      const btn = document.querySelector('#op'+this.questionAnswer+i+'');
      console.log(btn);
      btn.setAttribute('class', 'btn btn-outline-dark btn-block');
      btn.removeAttribute("disabled");
    }
  }*/
  mostrarTarjeta(){
    const target = document.querySelector('#card'+this.questionAnswer+'');
    target.removeAttribute("style");
    if(this.questionAnswer!=0){  
      const id= this.questionAnswer-1;
      const s = document.querySelector('#card'+id+'');
      s.setAttribute("style", "display: none");
   }
  }
  esconderTarjeta(){ 
      const id= this.questionAnswer+1;
      const target = document.querySelector('#card'+id+'');
      console.log(target);
      target.setAttribute("style", "display: none;");
  }
  saberRespuesta (idQ?:number, idOp?:number) {
    var rta = this.question[idQ].respuesta;
    var enunciadoRta ="";
    if (rta == idOp){
      const opcion = document.querySelector('#op'+idQ+idOp+'');
      opcion.setAttribute('class', 'btn btn-outline-success btn-block');
      opcion.setAttribute("disabled", "disabled");
      this.scoreGame = this.scoreGame+100;
      enunciadoRta = "Correcto";
    }else{
      const noRta = document.querySelector('#op'+idQ+idOp+'');
      noRta.setAttribute('class', 'btn btn-outline-danger btn-block');
      enunciadoRta = "Incorrecto";
    }
    //al score restarle el tiempo que duro resolviendo la pregunta, se supone que entre mas rapdio mas puntos gana
    this.scoreGame=this.scoreGame-(this.time-this.lapsoTime);
    this.lapsoTime = this.time;
    if(this.scoreGame <0){
      this.scoreGame= 0;
    }
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
    this.questionNumber = this.questionAnswer;
    this.pintarRespuesta(enunciadoRta);
    if(this.questionAnswer == this.question.length){
      this.finDeljuego();
    }
    if(this.questionAnswer !=10){
      this.mostrarTarjeta();
    }
    
  }

 pintarRespuesta(enunciado?:String){
  var colorBackground = ""; 
  if(enunciado == "Incorrecto"){
    colorBackground = "rgba(105 5 5 / 40%)";
   } 
   else{
    colorBackground = "rgba(2 78 8 / 40%)";
   }
   if(this.questionAnswer !=10){
    Swal.fire({
      title: enunciado,
      width: 600,
      padding: '3em',
      background: '#fff',
      backdrop: `
      `+colorBackground+`
        left top
        no-repeat
      `
    }).then((result) => {
      if (result.isConfirmed) {
        
      }
    })
  }
  }
  bonus5050(){
    var respuesta = this.question[this.questionAnswer].respuesta;
    const btn = document.querySelector('#mitad');
    btn.setAttribute("disabled", "disabled");
    for (var i = 1; i <=4; i++){
      if(respuesta != i){
        const noRta = document.querySelector('#op'+this.questionAnswer+i+'');
        noRta.setAttribute('class', 'btn btn-outline-dark btn-block');
        noRta.setAttribute("disabled", "disabled");
      }
    }
    if (respuesta == 4){
      respuesta = respuesta-1;
      const noRta = document.querySelector('#op'+this.questionAnswer+respuesta+'');
      noRta.removeAttribute("disabled");
    }
    else if (respuesta < 4){
      respuesta = respuesta+1;
      const noRta = document.querySelector('#op'+this.questionAnswer+respuesta+'');
      noRta.removeAttribute("disabled");
    }
  }

  saberRespuestaBonus(){
    var respuesta = this.question[this.questionAnswer].respuesta;
    const btn = document.querySelector('#saberRespuesta');
    btn.setAttribute("disabled", "disabled");
    for (var i = 1; i <=4; i++){
      if(respuesta != i){
        const noRta = document.querySelector('#op'+this.questionAnswer+i+'');
        noRta.setAttribute('class', 'btn btn-outline-dark btn-block');
        noRta.setAttribute("disabled", "disabled");
      }
    }
  }
  dosVeces(){
    //desactivar boton de dos veces
    const btnBN = document.querySelector('#dosVeces');
    btnBN.setAttribute("disabled", "disabled");
    //pintar el numero de la pregunta
    this.questionNumber = this.questionAnswer-1;
    //volver a la pregunta anterior 
    this.questionAnswer=this.questionAnswer-1;
    //repetir la pregunta
    for (var i = 1 ; i <=4 ; i++){
      const btn = document.querySelector('#op'+this.questionAnswer+i+'');
      btn.setAttribute('class', 'btn btn-outline-dark btn-block');
      btn.removeAttribute("disabled");
    }
    
    this.esconderTarjeta();
    this.mostrarTarjeta();
  }

  finDeljuego(){
    //guardar tiempo final
    this.endTime = this.time;
    //mostrar mensaje con el resultado 
    Swal.fire({
      icon: 'success',
      title: '¡Terminaste el juego! \n tu puntaje es',
      html: '<h3>'+this.scoreGame+' Puntos </h3><br> <h3>en '+this.endTime+' Segundos</h3>',
      confirmButtonText: 'continuar',
      width: 600,
      padding: '3em',
      backdrop: `
        url("http://azgif.com/wp-content/uploads/2019/12/Gif-fuegos-artificiales-de-a%C3%B1o-nuevo.gif")
        left top
        no-repeat`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.guardarScore();
        this.ranking();
      }
    })
  }
  ranking(){
    this.router.navigate( ['/ranking'] );
  }
  guardarScore (){
    this.score.id_person = this.datosUrl.id;
    this.score.scoreEnd=this.scoreGame;
    this.GameService.CreatePerson(this.score).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
  }
}

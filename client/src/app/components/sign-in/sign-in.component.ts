import { Component, OnInit, HostBinding } from '@angular/core';
import { personForm } from '../../models/person';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';


import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  @HostBinding('class') classes ='row';

login: boolean = false;

personForm: personForm = {
    nombre: "",
    nickName : "",
    correo: "",
    carrera: "",
    id_imagen :"",
  };
  constructor(private personService: PersonService,
              public router: Router ) {

   }

  ngOnInit(): void {
  }

   validar() {
   if(this.personForm.nombre == "" || this.personForm.nickName == "" || this.personForm.correo == "" || this.personForm.carrera == "" || this.personForm.id_imagen == ""){
    Swal.fire({
      icon: 'error',
      title: 'Rellena todos los datos para continuar',
    })
   }
   else{
     this.crearUsuario();
     Swal.fire({
      icon: 'success',
      title: 'Bienvenido tus datos fueron guardados correctamente',
    })
   }
  }
  crearUsuario (){
    console.log("entre");
    this.personService.CreatePerson(this.personForm).subscribe(
      res => {
        console.log(res)
        this.enter()
      },
      err => console.log(err)
    )
  }

  //METODO PARA INICIAR SESIÓN SI LA INFORMACIÓN ALMACENADA CONCUERDA A LA DATABASE
  /*iniciarSesion() {
    this.personService.confirmateSingIn(this.personSignIn).subscribe(
      res => {
        console.log(res)
        this.enter()
        this.login = true

      },
      err => console.log(err)
    )
  }*/

  //RUTA TEMPORAL PARA OMITIR LA AUTENTICACIÓN
  enter(){
    this.router.navigate([ '/' ])
  }

}

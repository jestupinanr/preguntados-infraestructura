import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-pag-principal',
  templateUrl: './pag-principal.component.html',
  styleUrls: ['./pag-principal.component.css']
})
export class PagPrincipalComponent implements OnInit {

  constructor(private personService: PersonService,private router: Router) { }

  person : any =[];
  ngOnInit(): void {
    this.personService.getUltimatePerson().subscribe(
      res => {
        console.log(res);
        this.person = res;
      },
      err => console.log(err)
      
    )
    console.log(this.person);
  }
  play(){
    
    this.router.navigate( ['/play/'+this.person.id+''] );
  }

}

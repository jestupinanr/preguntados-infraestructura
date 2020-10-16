import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { personForm } from '../../models/person';

import {PersonService} from '../../services/person.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private personService: PersonService, 
              private router: Router ) { }

  person : any =[];
  ngOnInit(): void {
    this.personService.getUltimatePerson().subscribe(
      res => {
        console.log(res);
        this.person = res;
      },
      err => console.log(err)
    )
  }

  play(id?:number){
    this.router.navigate( ['/play/'+id+''] );
  }

}

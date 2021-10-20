import { Component, OnInit } from '@angular/core';
import { EquipoService, Equipo } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Equipo[] = [];

  constructor( private _jugadoresService:EquipoService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    this.heroes = this._jugadoresService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate( ['/jugador',idx] );
  }

}

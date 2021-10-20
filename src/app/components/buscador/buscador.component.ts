import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = []
  termino:any;

  constructor( private activatedRoute:ActivatedRoute,
              private _jugadoresService: EquipoService) {

  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params =>{
      this.termino =params['termino'];
      this.heroes = this._jugadoresService.buscarHeroes( params['termino'] );
      console.log( this.heroes );
    });

  }

}

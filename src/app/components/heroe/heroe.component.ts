import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { EquipoService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  jugador:any = {};


  constructor( private activatedRoute: ActivatedRoute,
               private _jugadoresService: EquipoService
    ){

    this.activatedRoute.params.subscribe( params =>{
        this.jugador = this._jugadoresService.getHeroe( params['id'] );
        // console.log(this.heroe);
    });

  }

}


import { Injectable } from '@angular/core';

@Injectable()
export class EquipoService {

  private jugadores: Equipo[] = [
    {
      nombre: "ASENSIO",
      img: "https://i.ibb.co/NKzywVx/ASENSIO-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {
      nombre: "BENZEMA",
      img: "https://i.ibb.co/k4kTNhc/BENZEMA-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "CARVAJAL",
      img: "https://i.ibb.co/hdNKL7M/CARVAJAL-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "CASEMIRO",
      img: "https://i.ibb.co/M65yrsF/CASEMIRO-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "COURTOIS",
      img: "https://i.ibb.co/W6jtM5Y/COURTOIS-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "HAZARD",
      img: "https://i.ibb.co/6H9PHYQ/HAZARD-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "ISCO",
      img: "https://i.ibb.co/8jprKv6/ISCO-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "KROOS",
      img: "https://i.ibb.co/7RQgCf1/KROOS-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "LUCAS",
      img: "https://i.ibb.co/124nq9r/LUCAS-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "MENDY",
      img: "https://i.ibb.co/BsPVpPB/MENDY-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "LUNIN",
      img: "https://i.ibb.co/0QcxkS2/LUNIN-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "MARCELO",
      img: "https://i.ibb.co/9qC0Jfh/MARCELO-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    },
    {

      nombre: "MARIANO",
      img: "https://i.ibb.co/3f6NLWR/MARIANO-380-X501-Thumb.jpg",
      posicion: "delantero",
      equipo:"Real Madrid",
      anio: "10/12/2021"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes(): Equipo[] {
    return this.jugadores;
  }

  getHeroe(idx: any) {
    return this.jugadores[idx];
  }

  buscarHeroes(termino: string): Equipo[] {

    let jugadorArr: Equipo[] = [];
    termino = termino.toLowerCase();

    for (let i = 0; i < this.jugadores.length; i++) {

      let heroe = this.jugadores[i];

      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        jugadorArr.push(heroe)
      }

    }

    return jugadorArr;

  }


}


export interface Equipo {
  nombre: string;
  //bio: string;
  img: string;
  anio: string;
  posicion:String;
  equipo: string;
  idx?: number;
};

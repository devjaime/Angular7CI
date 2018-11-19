
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Boleta Ecológica",
      bio: "En esta historia se cambia el estado de boleta papel a boleta ecológica, junto con la actualización de mails",
      img: "assets/img/boletaecologica.png",
      aparicion: "2018-11-18",
      url:"https://celulassb.azurewebsites.net/boletaecologica/",
      casa:"En proceso"
    },
    {
      nombre: "Cambio de plan",
      bio: "cambio de plan contempla el ciclo de despliegue y cambio de plan",
      img: "assets/img/histplanes.png",
      aparicion: "2018-11-07",
      url:"https://celulassb.azurewebsites.net/CambioPlan/",
      casa:"En proceso sin definición"
    },
    {
      nombre: "Info Recambio de equipo",
      bio: "Esta historia contempla la factibilidad para cambiar un equipo..",
      img: "assets/img/inforecambio.png",
      aparicion: "2018-11-06",
      url:"https://celulassb.azurewebsites.net/InfoRecambioEquipo/",
      casa:"En proceso servicio de deuda"
    },
    {
      nombre: "Pagos Historico",
      bio: "Esta historia contempla los 12 últimos pagos historicos",
      img: "assets/img/historico.png",
      aparicion: "2018-11-06",
      url:"https://celulassb.azurewebsites.net/historicopago/",
      casa:"Terminada"
    }
  ];

  constructor(private http: HttpClient) {
    console.log('Servicio listo para usar!!!');
     /*fetch('assets/datos.json').then(response => {
      return response;
      }).then(data => {
      // Work with JSON data here
      console.log('datos' + data;
      }).catch(err => {
        console.log('error en el file' + err);
      // Do something for an error here
      });*/
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: string ){
    return this.heroes[idx];
  }

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  url: string;
  idx?: number;
};




import { Component } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-lista-de-destinos',
  templateUrl: './lista-de-destinos.component.html',
  styleUrls: ['./lista-de-destinos.component.css']
})
export class ListaDeDestinosComponent {
  destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  guardar(nombre:string, url:string):boolean {
    this.destinos.push(new DestinoViaje(nombre,url));
    return false;
  }

}

import { Component } from '@angular/core';
import { BdArticulosService } from '../bd-articulos.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent {
  private boolFiltrarBaratos:boolean = false

  constructor(private bdArticulos:BdArticulosService){}

  getArticulos():Array<any> {
    if (this.boolFiltrarBaratos) {
      let copiaArticulos = this.bdArticulos.getArticulos().slice()
      copiaArticulos.sort((a:any,b:any)=> a.precio - b.precio)
      return copiaArticulos.slice(0,5)
    } else {
      console.log("hola")
      return this.bdArticulos.getArticulos()
    }
}

  getCategoriaPorId(id:number):string {
    return this.bdArticulos.getCategoriaPorId(id)
  }

  filtrarBaratos(){
    this.boolFiltrarBaratos = !this.boolFiltrarBaratos
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ArticuloComponent } from './articulo/articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ArticuloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

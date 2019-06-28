import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'proyecto008';

  articulos = [
    {codigo: 1, descripcion: 'Naranjas', precio: 3.70}, 
    {codigo: 2, descripcion: 'Peras', precio: 2.10}, 
    {codigo: 3, descripcion: 'Manzanas', precio: 3.00}, 
    {codigo: 4, descripcion: 'Plátanos', precio: 1.50}, 
    {codigo: 5, descripcion: 'Mandarinas', precio: 4.20}
  ];
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  loading: boolean = true
  constructor(private _router: Router) { }
  buscar(datos: string, valor: string) {
    this._router.navigate(['/prestadores', datos, valor])
  }
  //this._apiService.stringEnviado$.subscribe((stringEnviado) => {
  // this.nombre = 'Hola\b' + stringEnviado;
  //})

}

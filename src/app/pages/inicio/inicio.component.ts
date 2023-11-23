import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private _router: Router) { }
  buscar(descripcion: string) {

    this._router.navigate(['/prestadores', descripcion])
  }
}

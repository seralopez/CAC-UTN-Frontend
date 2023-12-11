import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loading: boolean = true
  public login: boolean = false
  nombre: string | undefined
  constructor(private _apiService: ApiService, private _router: Router) { }
  buscar(datos: string, valor: string) {
    this._router.navigate(['/prestadores', datos, valor])
  }
  //this._apiService.stringEnviado$.subscribe((stringEnviado) => {
  // this.nombre = 'Hola\b' + stringEnviado;
  //})
  ngOnInit(): void {
    const localName = this._apiService.getName()
    if (localName == 'no') {
      this.login = false
      this.nombre = 'Ingresa'
    } else {
      this.login = true
      this.nombre = localName
    }
  }
}

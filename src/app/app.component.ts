import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IServices } from './models/servicio.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-iServices';

  public formBuscador = new FormGroup(
    { buscar: new FormControl('') }
  )

  public listaProvedores: IServices[] = []
  public login: boolean = false
  error: string = ''
  geoUbicacion: string = ''
  geoLatLong: string = ''
  nombre: string | undefined

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // GEOAPI -----------------------------------------
    /*this._activatedRoute.params.subscribe({
      next: () => {
        this._apiService.getGeo().subscribe({
          next: (data: any) => {
            this.geoUbicacion = data.city + data.country_code
            localStorage.setItem('geoLatLong', `${data.latitude},${data.longitude}`);
          },
          error: (error: any) => {
            this.error = error.error.msg
          }
        })
      },
      error: (error: any) => {
        console.log(error.error.msg)
      }
    })*/



    //this._apiService.stringEnviado$.subscribe((stringEnviado) => {
    // this.nombre = 'Hola\b' + stringEnviado;
    //})
    this.getName();

  }
  getName() {
    const localName = this._apiService.getName()
    if (localName == 'no') {
      this.login = false
      this.nombre = 'Ingresa'
    } else {
      this.login = true
      this.nombre = localName
    }
  }

  enviarInput(event: Event) {
    event.preventDefault();
    this._router.navigate(['/prestadores', 'buscador', this.formBuscador.value.buscar])
  }



}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IServices } from './models/servicio.model';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-iServices';

  public formBuscador = new FormGroup(
    { buscar: new FormControl('') }
  )

  public listaProvedores: IServices[] = []
  loading: boolean = true
  error: string = ''

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService

  ) { }




  enviarInput(event: Event) {
    event.preventDefault();

    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        this._apiService.getPrestadores('buscador', String(this.formBuscador.value.buscar)).subscribe({
          next: (data: IServices[]) => {
            this.listaProvedores = data
            this.loading = false
          },
          error: (error: any) => {
            this.error = error.error.msg
            console.log(error.error.msg)
          }
        })
      },
      error: (error: any) => {
        console.log(error.error.msg)
      }
    })



  }
}

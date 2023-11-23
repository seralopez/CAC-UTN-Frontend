import { Component, OnInit, inject } from '@angular/core';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  /* public listaProvedores: IServices[] = []
  public loading: boolean = true
  constructor(private _apiService: ApiService,
    private _router: Router) { }

  ngOnInit(): void {
    this._apiService.getPrestadores().subscribe({
      next: (data: IServices[]) => {
        console.log(data)
        this.listaProvedores = data;
        this.loading = false;
      },
      error: (error: any) => {
        this.loading = false;
      },
    });
  }

  buscar(descripcion: string) {
    this._router.navigate(['/prestadores', descripcion])
  }*/
  //servicio?: IServices
  public listaProvedores: IServices[] = []
  loading: boolean = true
  error: string = ''

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService

  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        this._apiService.getPrestadores(String(params['datos']), String(params['valor'])).subscribe({
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
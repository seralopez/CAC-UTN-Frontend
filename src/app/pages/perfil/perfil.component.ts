import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Perfil } from 'src/app/models/perfil.model';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public dataPerfil: IServices[] = []
  loading: boolean = true
  error: string = ''

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService

  ) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe({
      next: (params: Params) => {
        this._apiService.getUsuario(Number(params['id'])).subscribe({
          next: (data: IServices[]) => {
            this.dataPerfil = data
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
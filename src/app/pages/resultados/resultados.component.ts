import { Component, OnInit, inject } from '@angular/core';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  public listaProvedores: IServices[] = []
  public loading: boolean = true
  constructor(private _apiService: ApiService) { }

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
}
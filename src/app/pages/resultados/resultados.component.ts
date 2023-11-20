import { Component, OnInit, inject } from '@angular/core';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  listaProvedores: IServices[] = []
  loading: boolean = true

  private _apiService = inject(ApiService)

  ngOnInit(): void {
    this._apiService.getPrestadores().subscribe({
      next: (data: IServices[]) => {
        this.listaProvedores = data
        this.loading = false
      },
      error: (error: any) => {
        console.log(error)
        this.loading = false
      },
    })
  }
}

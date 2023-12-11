import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {
  errorMsg: string = '';
  error: boolean = false;
  datos: any = []
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService
  ) { }
  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: () => {
        const token = localStorage.getItem('token');
        const envio = { token: `${token}` };
        this._apiService.postTrabajos(envio).subscribe({
          next: (data: []) => {
            console.log(data)
            this.datos = data
          },
          error: (error: any) => {
            this.errorMsg = error.error.msg
            this.error = true
          }
        })
      },
      error: (error: any) => {
        this.errorMsg = error.msg
        this.error = true
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IServices } from 'src/app/models/servicio.model';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public dataPerfil: IServices[] = []
  public dataUsuario: IServices[] = []
  loading: boolean = true
  error: string = ''
  errorMsg: string = ''

  checkoutForm = this.formBuilder.group({
    name: ''
  });


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService,
    private formBuilder: FormBuilder

  ) { }

  enviar() {
    const trabajo = { email: 'u', password: 'u' };
    this._apiService.postTrabajo(trabajo).subscribe({
      next: (data) => {
        localStorage.setItem('token', data.usuario_token);
        localStorage.setItem('name', data.usuario_nombre);
        //this._apiService.enviarString(data.usuario_nombre)
        //this.error = false;
        //this._router.navigateByUrl("/");
      },
      error: (error: any) => {
        this.errorMsg = error.error.msg
      }
    })
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
  }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe({
      next: () => {
        this._apiService.getToken().subscribe({
          next: (data: IServices[]) => {
            this.dataUsuario = data
            this.loading = false

            this._activatedRoute.params.subscribe({
              next: (params: Params) => {
                this._apiService.getUsuario(Number(params['id'])).subscribe({
                  next: (data: IServices[]) => {
                    this.dataPerfil = data
                    this.loading = false
                    if (this.dataUsuario[0]['usuario_id'] === this.dataPerfil[0]['usuario_id']) {
                      this.error = 'No se puede contactar un mismo usuario'
                      this.errorMsg = 'No se puede contactar un mismo usuario'
                    }
                  },
                  error: (error: any) => {
                    this.error = error.error.msg
                    this.errorMsg = error.error.msg
                  }
                })
              },
              error: (error: any) => {
                this.errorMsg = error.error.msg
                this.error = error.error.msg
              }
            })

          },
          error: (error: any) => {
            this.error = error.error.msg
            this.errorMsg = error.error.msg
          }
        })
      },
      error: (error: any) => {
        this.errorMsg = error.error.msg
        this.error = error.error.msg
      }
    })
  }
}
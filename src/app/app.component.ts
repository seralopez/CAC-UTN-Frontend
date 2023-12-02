import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { IServices } from './models/servicio.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private _apiService: ApiService,
    private _router: Router
  ) { }

  enviarInput(event: Event) {
    event.preventDefault();
    this._router.navigate(['/prestadores', 'buscador', this.formBuscador.value.buscar])
  }
}

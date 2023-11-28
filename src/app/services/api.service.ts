import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServices } from "../models/servicio.model"
import { Perfil } from "../models/perfil.model"

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlBase: string = 'http://192.168.223.128:3000'

  constructor(private _httpClient: HttpClient) { }

  public getPrestadores(datos: String, valor: String): Observable<IServices[]> {
    return this._httpClient.get<IServices[]>(`${this.urlBase}/prestadores/${datos}/${valor}`);
  }

  public getUsuario(id: number): Observable<IServices[]> {
    return this._httpClient.get<IServices[]>(`${this.urlBase}/perfil/${id}`);
  }


}
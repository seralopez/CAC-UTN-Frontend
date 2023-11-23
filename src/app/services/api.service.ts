import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServices } from "../models/servicio.model"

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private urlBase: string = 'http://192.168.223.128:3000'

  constructor(private _httpClient: HttpClient) { }

  public getPrestadores(descripcion: String): Observable<IServices[]> {
    return this._httpClient.get<IServices[]>(`${this.urlBase}/prestadores/${descripcion}`);
  }

  public getUsuario(id: number): Observable<IServices[]> {
    return this._httpClient.get<IServices[]>(`${this.urlBase}/usuario/${id}`);
  }


}
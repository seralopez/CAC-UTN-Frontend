import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
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

  public getToken(): Observable<IServices[]> {
    const token = localStorage.getItem('token');
    return this._httpClient.get<IServices[]>(`${this.urlBase}/api/${token}`);
  }

  public getGeo() {
    return this._httpClient.get('https://ipgeolocation.abstractapi.com/v1/?api_key=3fd8d367a42a45288da33b6892bb1548')
  }

  public postLogin(user: any): Observable<any> {
    return this._httpClient.post(`${this.urlBase}/login`, user)
  }

  public postTrabajo(job: any): Observable<any> {
    return this._httpClient.post(`${this.urlBase}/trabajo/nuevo`, job)
  }
  private stringSource = new Subject<string>();
  stringEnviado$ = this.stringSource.asObservable();

  enviarString(stringEnviado: string) {
    this.stringSource.next(stringEnviado);
  }

  getName() {
    const localName = localStorage.getItem('name');
    if (localName === null) {
      return 'no'
    } else {
      return localName
    }
  }
}
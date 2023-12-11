import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component'

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent,
    PerfilComponent,
    ContactoComponent,
    InicioComponent,
    LoginComponent,
    TrabajosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';
import { LoginComponent } from './pages/login/login.component';
import { TrabajosComponent } from './pages/trabajos/trabajos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto/:id', component: ContactoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'prestadores', component: ResultadosComponent },
  { path: 'prestadores/:datos/:valor', component: ResultadosComponent },
  { path: 'trabajos', component: TrabajosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
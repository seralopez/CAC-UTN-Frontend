import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ResultadosComponent } from './pages/resultados/resultados.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'resultados', component: ResultadosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
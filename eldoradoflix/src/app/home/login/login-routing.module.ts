import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoUsuarioComponent } from '../novo-usuario/novo-usuario.component';
import { HomeComponent } from '../home.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    children: [
      {
          path: 'novousuario',
          component: NovoUsuarioComponent,
      },
      {
          path: 'home',
          component: HomeComponent,
      },
    ],
  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }

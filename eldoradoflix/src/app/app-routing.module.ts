import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'login',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./home/login/login.module').then((m)=> m.LoginModule)
  },
  {
    path: 'novousuario',
    loadChildren: () => import('./home/novo-usuario/novo-usuario.module').then((m)=> m.NovoUsuarioModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

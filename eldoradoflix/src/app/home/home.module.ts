import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { MensagemModule } from '../mensagem/mensagem.module';

import { HomeComponent } from './home.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { CardComponent } from '../shared/grade/card/card.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { GradeComponent } from '../shared/grade/grade.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { PaginationComponent } from '../shared/pagination/pagination.component';
import { SeletorComponent } from '../shared/grade/seletor/seletor.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';


@NgModule({
  declarations: [
    NavBarComponent,
    BannerComponent,
    GradeComponent,
    SeletorComponent,
    CardComponent,
    FooterComponent,
    PaginationComponent,
    LoginComponent,
    HomeComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

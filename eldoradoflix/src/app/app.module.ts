import { CardComponent } from './shared/grade/card/card.component';
import { SeletorComponent } from './shared/grade/seletor/seletor.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/banner/banner.component';
import { GradeComponent } from './shared/grade/grade.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    GradeComponent,
    SeletorComponent,
    CardComponent,
    FooterComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

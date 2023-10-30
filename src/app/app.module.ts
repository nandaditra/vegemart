import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { KarirComponent } from './modules/karir/karir.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { SitusKamiComponent } from './modules/situs-kami/situs-kami.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderHomeComponent } from './layout/header-home/header-home.component';
import { HeaderWebComponent } from './layout/header-web/header-web.component';
import { FooterHomeComponent } from './layout/footer-home/footer-home.component';
import { FooterWebComponent } from './layout/footer-web/footer-web.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KarirComponent,
    NotFoundComponent,
    SitusKamiComponent,
    HeaderHomeComponent,
    HeaderWebComponent,
    FooterHomeComponent,
    FooterWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

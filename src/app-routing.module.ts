import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/modules/home/home.component';
import { KarirComponent } from './app/modules/karir/karir.component';
import { SitusKamiComponent } from './app/modules/situs-kami/situs-kami.component';

const routes: Routes= [
  { path:'', redirectTo:'/', pathMatch:'full'},
  { path:'', component: HomeComponent},
  { path:'karir', component: KarirComponent},
  { path:'sites', component: SitusKamiComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

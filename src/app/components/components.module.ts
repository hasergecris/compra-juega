import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FelicidadesComponent } from './modal/felicidades/felicidades.component';
import { SigueParticipandoComponent } from './modal/sigue-participando/sigue-participando.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FelicidadesComponent,
    SigueParticipandoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FelicidadesComponent,
    SigueParticipandoComponent
  ]
})
export class ComponentsModule { }

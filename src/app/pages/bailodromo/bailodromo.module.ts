import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BailodromoComponent } from './bailodromo.component';
import { PlayComponent } from './play/play.component';
import { AppRoutingModule } from '../../app-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { SharedModule } from '../shared/shared.module';
import { CuentaRegresivaComponent } from './cuenta-regresiva/cuenta-regresiva.component';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [
    BailodromoComponent,
    PlayComponent,
    CuentaRegresivaComponent,
    IntroComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    SharedModule],
})
export class BailodromoModule {}

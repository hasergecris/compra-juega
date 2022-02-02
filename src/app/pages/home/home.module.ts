import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CancioneroModule } from '../cancionero/cancionero.module';
import { BailodromoModule } from '../bailodromo/bailodromo.module';
import { RecetaSecretaModule } from '../receta-secreta/receta-secreta.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    AppModule,
    CancioneroModule,
    BailodromoModule,
    RecetaSecretaModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}

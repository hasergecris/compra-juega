import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BailodromoModule } from './pages/bailodromo/bailodromo.module';
import { CancioneroModule } from './pages/cancionero/cancionero.module';
import { RecetaSecretaModule } from './pages/receta-secreta/receta-secreta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    RouterModule,
    BailodromoModule,
    CancioneroModule,
    RecetaSecretaModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

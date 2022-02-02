import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RecetaSecretaComponent } from './receta-secreta.component';
import { PlayComponent } from './play/play.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { IntroComponent } from './intro/intro.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    RecetaSecretaComponent,
    PlayComponent,
    IntroComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
  ]
})
export class RecetaSecretaModule { }

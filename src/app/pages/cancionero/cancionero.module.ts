import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CancioneroComponent } from './cancionero.component';
import { PlayComponent } from './play/play.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  declarations: [
    CancioneroComponent,
    PlayComponent,
    IntroComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    CommonModule,
    SharedModule
  ],
})
export class CancioneroModule {}

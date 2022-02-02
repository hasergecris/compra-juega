import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BailodromoComponent } from './pages/bailodromo/bailodromo.component';
import { BAILE_ROUTES } from './pages/bailodromo/bailodromo.routes';
import { CancioneroComponent } from './pages/cancionero/cancionero.component';
import { CANCIONERO_ROUTES } from './pages/cancionero/cancionero.routes';
import { HomeComponent } from './pages/home/home.component';
import { RecetaSecretaComponent } from './pages/receta-secreta/receta-secreta.component';
import { RECETA_ROUTES } from './pages/receta-secreta/receta-secreta.routes';
import { Pagina404Component } from './pages/shared/pagina404/pagina404.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '404', component: Pagina404Component},
  { path: 'bailodromo', 
    component: BailodromoComponent, 
    children: BAILE_ROUTES
  },
  { path: 'receta',
   component: RecetaSecretaComponent,
    children: RECETA_ROUTES
  },
  { path: 'receta/:show',
   component: RecetaSecretaComponent,
  },
  {
    path: 'cancionero',
    component: CancioneroComponent,
    children: CANCIONERO_ROUTES,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { Routes } from "@angular/router";
import { CuentaRegresivaComponent } from "./cuenta-regresiva/cuenta-regresiva.component";
import { IntroComponent } from "./intro/intro.component";
import { PlayComponent } from "./play/play.component";

export const BAILE_ROUTES: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'intro/:registrado', component: IntroComponent },
  { path: 'play/:tipo_baile', component: PlayComponent },
  { path: 'cuenta-regresiva/:tipo_baile', component: CuentaRegresivaComponent},
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
];
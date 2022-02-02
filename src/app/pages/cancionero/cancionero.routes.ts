import { Routes } from "@angular/router";
import { IntroComponent } from "./intro/intro.component";
import { PlayComponent } from "./play/play.component";

export const CANCIONERO_ROUTES: Routes = [
  { path: 'intro', component: IntroComponent},
  { path: 'play', component: PlayComponent },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
];
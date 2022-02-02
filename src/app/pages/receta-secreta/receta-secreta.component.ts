import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receta-secreta',
  templateUrl: './receta-secreta.component.html',
  styleUrls: ['./receta-secreta.component.sass']
})
export class RecetaSecretaComponent{
  constructor( public router: ActivatedRoute) { }
  
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancionero',
  templateUrl: './cancionero.component.html',
  styleUrls: ['./cancionero.component.sass']
})
export class CancioneroComponent{  

  constructor( private routes: Router) { }

}

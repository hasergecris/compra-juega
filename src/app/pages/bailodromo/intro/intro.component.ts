import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { 
    let registrado = (this.rutaActiva.snapshot.params.registrado && this.rutaActiva.snapshot.params.registrado==1)?true:false;    
    localStorage.setItem('gj_registrado', JSON.stringify(registrado));
  }

  ngOnInit(): void {
  }

}

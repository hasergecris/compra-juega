import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass']
})
export class PlayComponent implements OnInit {
  baile1 = [
    {movimiento:1, activo:false},
    {movimiento:2, activo:false},
    {movimiento:3, activo:false},
    {movimiento:4, activo:false},
    {movimiento:5, activo:false}
  ];
  baile2 = [
    {movimiento:2, activo:false},
    {movimiento:5, activo:false},
    {movimiento:6, activo:false},
    {movimiento:3, activo:false},
    {movimiento:7, activo:false},
    {movimiento:8, activo:false},
    {movimiento:4, activo:false},
    {movimiento:9, activo:false},
    {movimiento:10, activo:false},
    {movimiento:5, activo:false}
  ];  
  baileReproducir:any[] = [];
  pasoActual = 1;
  intervalId:any;
  mostrarBotonesCalificacion=false;
  tiempoPaso = environment.tiempo_paso;
  tituloBaile = "";
  
  constructor(private rutaActiva: ActivatedRoute) {
    let tipoBaile = (this.rutaActiva.snapshot.params.tipo_baile)?this.rutaActiva.snapshot.params.tipo_baile:1;
    if(tipoBaile==1){
      this.baileReproducir = this.baile1;
      this.tituloBaile = "Baila Baila";
    }else if(tipoBaile==2){
      this.baileReproducir = this.baile2;
      this.tituloBaile = "Manito Manito";
    }else{
      this.baileReproducir = this.baile1;
      this.tituloBaile = "Baila Baila";
    }     
    this.intervalId = setInterval(()=>{
      if(this.baileReproducir[this.pasoActual-2]){
        this.baileReproducir[this.pasoActual-2].activo=false;
      }      
      if(this.baileReproducir[this.pasoActual-1]){
        this.baileReproducir[this.pasoActual-1].activo=true;
      }else{
        clearInterval(this.intervalId);
        let registrado = localStorage.getItem('gj_registrado');
        if(registrado=="false"){
          this.mostrarBotonesCalificacion=true;
        }        
      }            
      this.pasoActual++;
    },this.tiempoPaso*1000)
  }

  ngOnInit(): void {
    this.reproducir();
  }  

  sonidoFondo:any;
  reproducir() {
    this.sonidoFondo = new Audio('assets/sonidos/Bailodromo/Needle in a Dance Pit.mp3');
    this.sonidoFondo.play();
  }
  sonidoGana(){
    this.sonidoFondo.pause();
    const audio = new Audio('assets/sonidos/Ganar/WIN sound effect no copyright.mp3');
    audio.play();
  }
  sonidoPierde(){
    this.sonidoFondo.pause();
    const audio = new Audio('assets/sonidos/Perder/Perder.mp3');
    audio.play();
  }
  cerrar(){
    this.sonidoFondo.pause();
  }

}

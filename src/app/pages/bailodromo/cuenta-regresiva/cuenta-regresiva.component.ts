import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-regresiva',
  templateUrl: './cuenta-regresiva.component.html',
  styleUrls: ['./cuenta-regresiva.component.sass']
})
export class CuentaRegresivaComponent implements OnInit {
  contador : number = 5;
  intervalId:any;
  tipoBaile:number = 1;
  constructor(private router: Router, private rutaActiva: ActivatedRoute) {    
    this.tipoBaile = this.rutaActiva.snapshot.params.tipo_baile; 
    const audio = new Audio('assets/sonidos/CuentaRegresiva/5 Second Countdown HD - with Sound Effect (without copyright).mp3');
    audio.play();   
    this.intervalId = setInterval(()=>{
      this.contador--;
      if(this.contador<=0){
        clearInterval(this.intervalId);
        this.router.navigate(['/bailodromo/play/',this.tipoBaile]);
      }
    },1000);    
  }

  ngOnInit(): void {         
  }

}

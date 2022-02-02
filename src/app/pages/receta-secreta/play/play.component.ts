import {
  Component,
  ViewChild,
  TemplateRef,
  ElementRef,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, Ingredient } from '../../../interface/type';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass'],
})
export class PlayComponent {
  Product: Array<Producto> | any = [
    {
      name: 'pancakes',
      etiqueta: 'Pancakes',
      fondo: '../../../../assets/img/receta/fondo.png',
      ingredientes: [
        {
          id: 1,
          css: 'huevos',
          state: 'Winner',
          name: 'Huevos',
          img: '../../../../assets/img/receta/huevos.png',
          selec: 0,
        },
        {
          id: 2,
          css: 'harina',
          state: 'Winner',
          name: 'Harina de pancakes',
          img: '../../../../assets/img/receta/Harina.png',
          selec: 0,
        },
        {
          id: 3,
          css: 'leche',
          state: 'Winner',
          name: 'Leche',
          img: '../../../../assets/img/receta/leche.png',
          selec: 0,
        },
        {
          id: 4,
          css: 'perejil',
          state: 'Intentalo',
          name: 'Perejil',
          img: '../../../../assets/img/receta/Perejil.png',
          selec: 0,
        },
        {
          id: 5,
          css: 'mantequilla',
          state: 'Winner',
          name: 'Mantequilla',
          img: '../../../../assets/img/receta/mantequilla.png',
          selec: 0,
        },
        {
          id: 6,
          css: 'sal',
          state: 'Winner',
          name: 'Sal / Azúcar',
          img: '../../../../assets/img/receta/salAzucar.png',
          selec: 0,
        },
      ],
    },
    {
      name: 'flan_caramelo',
      etiqueta: 'Flan de caramelo',
      fondo: '../../../../assets/img/receta/fondo.png',
      ingredientes: [
        {
          id: 1,
          css: 'vainilla',
          state: 'Winner',
          name: 'Esencia de vainilla',
          img: '../../../../assets/img/receta/vainilla.png',
          selec: 0,
        },
        {
          id: 2,
          css: 'caramelo',
          state: 'Winner',
          name: 'Caramelo',
          img: '../../../../assets/img/receta/caramelo.png',
          selec: 0,
        },
        {
          id: 3,
          css: 'leche',
          state: 'Winner',
          name: 'Leche',
          img: '../../../../assets/img/receta/leche.png',
          selec: 0,
        },
        {
          id: 4,
          css: 'azucar',
          state: 'Winner',
          name: 'Azucar',
          img: '../../../../assets/img/receta/azucar.png',
          selec: 0,
        },
        {
          id: 5,
          css: 'fresas',
          state: 'Intentalo',
          name: 'Fresas',
          img: '../../../../assets/img/receta/fresa.png',
          selec: 0,
        },
        {
          id: 6,
          css: 'huevos',
          state: 'Winner',
          name: 'Huevos',
          img: '../../../../assets/img/receta/huevos.png',
          selec: 0,
        },
      ],
    },
    {
      name: 'hamburguesa',
      etiqueta: 'Hamburguesa',
      fondo: '../../../../assets/img/receta/fondo.png',
      ingredientes: [
        {
          id: 1,
          css: 'pan',
          state: 'Winner',
          name: 'Pan',
          img: '../../../../assets/img/receta/pan.png',
          selec: 0,
        },
        {
          id: 2,
          css: 'pimenton',
          state: 'Intentalo',
          name: 'Pimentón',
          img: '../../../../assets/img/receta/pimenton.png',
          selec: 0,
        },
        {
          id: 3,
          css: 'verdura',
          state: 'Winner',
          name: 'Tomate y cebolla',
          img: '../../../../assets/img/receta/verdura.png',
          selec: 0,
        },
        {
          id: 4,
          css: 'carne',
          state: 'Winner',
          name: 'Carne',
          img: '../../../../assets/img/receta/carne.png',
          selec: 0,
        },
        {
          id: 5,
          css: 'queso',
          state: 'Winner',
          name: 'Queso',
          img: '../../../../assets/img/receta/queso.png',
          selec: 0,
        },
        {
          id: 6,
          css: 'lechuga',
          state: 'Winner',
          name: 'Lechuga',
          img: '../../../../assets/img/receta/lechuga.png',
          selec: 0,
        },
      ],
    },
  ];
  id: string | null | undefined;
  seleccionados: any[] = [];
  estado: any = -1;
  modal!: NgbModalRef;
  segundos: number;
  intervalId: any;


  @ViewChild('modalWinner') modalWinner!: any;
  @ViewChild('modalIntenta') modalIntenta!: any;


  constructor( public route: ActivatedRoute, private router: Router, private openService: NgbModal) {
    this.segundos=environment.tiempo_juego_segundos;
    this.intervalId = setInterval(()=>{
      this.segundos--;
      if (this.segundos<=0){        
        if(this.estado==-1){
          this.estado=0;
          this.modalSigueParticipando();          
        }
        clearInterval(this.intervalId);
      }      
    }, 1000);
    this.reproducir();
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('P');
  }

  
  sonidoFondo:any;
  reproducir() {
    this.sonidoFondo = new Audio('assets/sonidos/LaReceta/Welcome to Hitsville.mp3');
    this.sonidoFondo.play();
  }
  sonidoClick(){
    const audio = new Audio('assets/sonidos/Boton/Video Game Beep - Sound Effect.mp3');
    audio.play();
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



  modalFelicitaciones() {
    
    this.modal = this.openService.open(this.modalWinner, {
        centered: true,
        size: 'lg',
        backdrop: 'static',
        keyboard: false,
      });
      this.sonidoGana();
      clearInterval(this.intervalId);
  }

  modalSigueParticipando() {
    this.modal = this.openService.open(this.modalIntenta, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.sonidoPierde();
    clearInterval(this.intervalId);
  }

  seleccionar(indiSel: any) {
    if (this.estado != -1) return;

    for (let i = 0; i < this.Product.length; i++) {
      // alert(this.Product[i].etiqueta+"|"+this.id);
      if (this.Product[i].etiqueta == this.id) {
        console.log(this.Product[i].ingredientes[indiSel]);
        
        if (this.Product[i].ingredientes[indiSel].state == 'Winner') {
          this.Product[i].ingredientes[indiSel].selec = 1;
          if (this.seleccionados.includes(indiSel) == false)
            this.seleccionados.push(indiSel);
        } else {
          this.estado = 0;
        }
      }
    }


    if (this.estado==0){

      this.modalSigueParticipando();
      return;
    }

    if (this.seleccionados.length >= 5) {
      this.estado = 1;
      this.modalFelicitaciones();
      return;
    }

    this.sonidoClick();


  }

  exit() {
    this.modal.close();
  }
}

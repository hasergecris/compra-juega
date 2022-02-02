import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FelicidadesComponent } from 'src/app/components/modal/felicidades/felicidades.component';
import { environment } from 'src/environments/environment';
import { SigueParticipandoComponent } from '../../../components/modal/sigue-participando/sigue-participando.component';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass'],
})
export class PlayComponent implements OnInit {
  
  constructor(private openService: NgbModal) {

    this.segundos=environment.tiempo_juego_segundos;

    this.intervalId = setInterval(()=>{

      this.segundos--;
      if (this.segundos<=0){

        this.validarSelec();
        clearInterval(this.intervalId);
      }
      if (this.segundos==2){
        // this.sonidoFondo.pause();
        this.sonido5Seg = new Audio('assets/sonidos/CuentaRegresiva/5 Second Countdown HD - with Sound Effect (without copyright).mp3');
        this.sonido5Seg.play();
      }

    }, 1000);

    this.reproducir();

  }
  intervalId: any;
  segundos: any;
  estado: any = -1;

  seleccionados: any[] = [];
  temp_sel_left: any = -1;
  temp_sel_right: any = -1;

  songs = [
    [
      {
        code: 1,
        text: 'El cielo está cansado ya de ver',
        class: 'morado_claro',
      },
      {
        code: 8,
        text: 'Ha transformado en hombre a Dennis',
        class: 'azul_claro',
      },
    ],
    [
      { code: 2, text: 'Ama la tierra en que naciste', class: 'morado_claro' },
      { code: 2, text: 'Ámala es una y nada más', class: 'azul_claro' },
    ],
    [
      { code: 3, text: 'No quiero soñar', class: 'morado_claro' },
      { code: 6, text: 'Tú te lo buscaste', class: 'azul_claro' },
    ],
    [
      { code: 4, text: 'Si nos dejan', class: 'morado_claro' },
      { code: 1, text: 'La lluvia caer', class: 'azul_claro' },
    ],
    [
      { code: 5, text: 'Es tan fácil', class: 'morado_claro' },
      { code: 3, text: 'Mil veces las mismas cosas', class: 'azul_claro' },
    ],
    [
      { code: 6, text: 'Florecita rockera', class: 'morado_claro' },
      { code: 5, text: 'Romper un corazón', class: 'azul_claro' },
    ],
    [
      { code: 7, text: 'Pronto llegará', class: 'morado_claro' },
      { code: 4, text: 'Nos vamos a querer toda la vida', class: 'azul_claro' },
    ],
    [
      { code: 8, text: 'La luna llena sobre parís', class: 'morado_claro' },
      { code: 7, text: 'El día de mi suerte', class: 'azul_claro' },
    ],
  ];

  sonidoFondo:any;
  sonido5Seg:any;
  reproducir() {
    this.sonidoFondo = new Audio('assets/sonidos/Cancionero/Sing Song.mp3');
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
    clearInterval(this.intervalId);
    this.sonidoFondo.pause();
    this.sonido5Seg.pause();
  }

  modalFelicitaciones() {
    this.estado = 1;
    clearInterval(this.intervalId);
    this.openService.open(FelicidadesComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });

    this.sonidoGana();
  }

  modalSigueParticipando() {
    this.estado = 0;
    clearInterval(this.intervalId);
    this.openService.open(SigueParticipandoComponent, {
      centered: true,
      size: 'lg',
      backdrop: 'static',
      keyboard: false,
    });
    this.sonidoPierde();
  }

  selecLeft(indi: any) {
    if (
      this.seleccionados.includes(this.songs[indi][0].code.toString()) == true
    )
      return;

    this.temp_sel_left = indi;
    // this.songs[this.temp_sel_left][0].class='azul_claro';
    this.sonidoClick();
    this.validarSelec();
  }

  selecRight(indi: any) {
    if (
      this.seleccionados.includes(this.songs[indi][1].code.toString()) == true
    )
      return;

    this.temp_sel_right = indi;
    // this.songs[this.temp_sel_right][0].class='azul_claro';
    this.sonidoClick();
    this.validarSelec();
  }


  validarSelec(){
    if (this.segundos<=0 && this.estado==-1){

      this.modalSigueParticipando();
      return;
    }
    if (
      this.temp_sel_left == -1 ||
      this.temp_sel_right == -1 ||
      this.estado != -1
    )
      return;

    // alert(this.temp_sel_left+"|"+this.temp_sel_right);

    let perdio = 0;

    if (
      this.songs[this.temp_sel_left][0].code ==
      this.songs[this.temp_sel_right][1].code
    ) {
      this.songs[this.temp_sel_left][0].class = 'verde';
      this.songs[this.temp_sel_right][1].class = 'verde';

      if (
        this.seleccionados.includes(
          this.songs[this.temp_sel_left][0].code.toString()
        ) == false
      )
        this.seleccionados.push(
          this.songs[this.temp_sel_left][0].code.toString()
        );

      console.log(this.seleccionados);
    } else {
      this.songs[this.temp_sel_left][0].class = 'rojos';
      this.songs[this.temp_sel_right][1].class = 'rojos';
      perdio = 1;
    }

    this.temp_sel_left = -1;
    this.temp_sel_right = -1;

    if (perdio == 1) {
      //Perdio por seleccion
      this.modalSigueParticipando();
      return;
    }

    if (this.seleccionados.length >= 3) {
      this.modalFelicitaciones();
      return;
    }

    

  }

  // song_right = [
  //   {code:1, texto:"El cielo está cansado ya de ver", class: "morado_claro"},

  // ];

  ngOnInit(): void {}
}

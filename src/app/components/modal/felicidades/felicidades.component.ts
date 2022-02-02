import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-felicidades',
  templateUrl: './felicidades.component.html',
  styleUrls: ['./felicidades.component.sass']
})
export class FelicidadesComponent implements OnInit {

  constructor(
    public modalActivo: NgbActiveModal
  ) { }

  exit(){
    this.modalActivo.dismiss();
  }

  ngOnInit(): void {
  
  }

}

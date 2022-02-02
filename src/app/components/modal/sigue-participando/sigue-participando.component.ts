import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sigue-participando',
  templateUrl: './sigue-participando.component.html',
  styleUrls: ['./sigue-participando.component.sass'],
})
export class SigueParticipandoComponent implements OnInit {
  
  constructor(public modalActivo: NgbActiveModal) {}

  exit() {
    this.modalActivo.dismiss();
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router) { }

  game(t: any) {
    if (t == 1) {
      this.router.navigate(['../bailodromo']);
    } else if (t == 2) {
      this.router.navigate(['../cancionero']);
    } else if (t == 3) {
      this.router.navigate(['../receta']);
    }
  }

  ngOnInit(): void {
  }

}

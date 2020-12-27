import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  hambMenuOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  toggleHambMenu() {
    console.log('toggle acionado kkk: ', this.hambMenuOpen);
    this.hambMenuOpen = !this.hambMenuOpen;
  }

}

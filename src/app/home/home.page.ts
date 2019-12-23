import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  logado: boolean = false;
  nomeUsuario: string;

  slideOpts = {
    speed: 400,
    slidesPerView: 3
  };

  constructor(private authService: AuthenticationService) {}

  ngOnInit(){
    if(this.authService.isAuthenticated()){
      this.logado = true;
      this.nomeUsuario = this.authService.getNomeUsuario();
    }
  }

}

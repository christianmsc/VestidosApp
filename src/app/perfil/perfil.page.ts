import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private authenticationService: AuthenticationService, private navController: NavController) { }

  ngOnInit() {
  }

  sair(){
    this.authenticationService.logout();
    this.navController.navigateRoot('');
  }


}

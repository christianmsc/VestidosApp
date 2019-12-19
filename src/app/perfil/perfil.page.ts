import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { NavController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any;

  constructor(private authenticationService: AuthenticationService, private navController: NavController, private usuarioService: UsuarioService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    if(!this.authenticationService.isAuthenticated()){
      this.navController.navigateRoot('');
    }
    else{
      this.usuarioService.getUsuario(this.authenticationService.getIdUsuario()).subscribe((data: any) => {
        data = JSON.parse(data._body);
  
        if (data.sucesso) {
          this.usuario = data.usuario;
        }
        else {
          alert('usuári@ inválido =(');
        }
      }, err => {
        alert('não consegui fazer a verificação d@ usuári@ =´(');
      });
    }
  }



  sair(){
    this.authenticationService.logout();
    this.navController.navigateRoot('');
  }


}

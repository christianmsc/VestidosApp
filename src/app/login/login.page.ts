import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  logar(login, senha) {
    debugger;
    if (login === 'admin' && senha === '123') {
      this.authService.login();
    }
  }

  cadastrar() {
    this.navCtrl.navigateForward(`cadastro-usuario`);
  }

}

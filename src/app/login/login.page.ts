import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController, private authService: AuthenticationService, private loginService: LoginService) { }

  ngOnInit() {
  }

  logar(login, senha) {
    this.loginService.login(login, senha).subscribe((data: any) => {

      data = JSON.parse(data._body);

      if (data.sucesso) {
        this.authService.login();
        this.navCtrl.navigateRoot('');
      }
      else {
        alert('login inválido =(');
      }
    }, err => {
      alert('não consegui verificar seu login =´(');
    });

  }

  cadastrar() {
    this.navCtrl.navigateForward(`cadastro-usuario`);
  }

}

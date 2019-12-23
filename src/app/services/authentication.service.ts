import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

const USUARIO_ID = 'usuario-id';
const USUARIO_NOME = 'usuario-nome';
const USUARIO_EMAIL = 'usuario-email';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticationState = new BehaviorSubject(false);

  constructor(private plt: Platform) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  checkToken() {
    if (localStorage.getItem(USUARIO_ID)) {
      this.authenticationState.next(true);
    }
  }

  login(idUsuario) {
    localStorage.setItem(USUARIO_ID, idUsuario);
    this.authenticationState.next(true);

  }

  logout() {
    localStorage.clear();
    this.authenticationState.next(false);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  getIdUsuario() {
    return localStorage.getItem(USUARIO_ID);
  }

  getNomeUsuario() {
    return localStorage.getItem(USUARIO_NOME);
  }

  getEmailUsuario() {
    return localStorage.getItem(USUARIO_EMAIL);
  }

}
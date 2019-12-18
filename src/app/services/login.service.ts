import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string = environment.baseUrl;

  constructor(public http: Http) { }

  login(email: string, senha: string): Observable<any>{
    const login: FormData = new FormData();
    login.append("login", JSON.stringify({email: email, senha: senha}));
    return this.http.post(this.baseUrl + `Login.ashx`, login).pipe();
  }

}

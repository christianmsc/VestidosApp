import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { NovoUsuario } from '../models/NovoUsuario';

@Injectable({
  providedIn: 'root'
})
export class CadastrarUsuarioService {
  
  // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'my-auth-token'
    //   })
    // };

  private baseUrl: string = environment.baseUrl;

  constructor(public http: Http) { }

  postUsuario(usuario: NovoUsuario): Observable<any>{
    const data: FormData = new FormData();
    data.append("jsonUsuario", JSON.stringify(usuario));
    return this.http.post(this.baseUrl + `CadastrarUsuario.ashx`, data).pipe();
  }
  
}

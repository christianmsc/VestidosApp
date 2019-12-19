import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl: string = environment.baseUrl;

  constructor(public http: Http) { }

  getUsuario(id): Observable<any>{
    return this.http.get(this.baseUrl + `Usuario.ashx?id=${id}`).pipe();
  }
  
}

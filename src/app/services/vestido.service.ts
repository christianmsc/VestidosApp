import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VestidoService {

  private baseUrl: string = environment.baseUrl;

  constructor(public http: Http) { }

  getVestidos(id?: number): Observable<any>{
    return this.http.get(this.baseUrl + `Vestidos.ashx${id ? '?id=' + id : ''}`).pipe();
  }

  getVestidosPaginacao(offset = 0, results = 1): Observable<any>{
    return this.http.get(`${this.baseUrl}Vestidos.ashx?offset=${offset}&results=${results}`).pipe();
  }

}

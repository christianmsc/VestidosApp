import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VestidoService {

  private baseUrl: string = environment.baseUrl;

  constructor(public http: Http) { }

  getVestidos(): Observable<any>{
    return this.http.get(this.baseUrl + "Vestidos.ashx").pipe();
  }

}

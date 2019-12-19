import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Foto } from '../models/foto';

@Injectable({
  providedIn: 'root'
})
export class FotoUploadService {

  private fotoUrl: string = environment.fotoUrl;

  constructor(public http: Http) { }

  uploadFoto(base64: string): Observable<any> {
    const foto: Foto = new Foto();
    foto.base64 = base64;
    return this.http.post(this.fotoUrl + `api/foto/add`, foto).pipe();
  }

}

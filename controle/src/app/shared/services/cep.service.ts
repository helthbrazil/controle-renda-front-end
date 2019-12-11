import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  readonly URL_CEP = `https://viacep.com.br/ws/:CEP/json/`;

  constructor(private http: HttpClient) { }

  buscarCep(cep: string): Observable<any> {
    const url = this.URL_CEP.replace(':CEP', cep);
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

    autenticar(usuario: string, senha: string):Observable<any> {

    return this.httpClient.post('http://localhost:3001/user/login', {
      userName: usuario,
      password: senha,
    })
   }
}

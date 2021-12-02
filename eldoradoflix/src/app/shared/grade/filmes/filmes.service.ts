import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filmes } from './filmes';

const API = 'http:localhost:3001';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }
    listadoUsuario (nomeDoUsuario: string):Observable<Filmes> {
      
      return this.http.get<Filmes>(`${API}/${nomeDoUsuario}/photos`)
    }
   }

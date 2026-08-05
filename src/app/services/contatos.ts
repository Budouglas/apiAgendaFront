import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})
export class ContatosService {
  private apiUrl = 'http://localhost:8080/api/contatos';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }

  save(contato: Omit<Contato, 'id'>): Observable<Contato> {
    return this.http.post<Contato>(this.apiUrl, contato);
  }
}

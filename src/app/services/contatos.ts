import {Injectable, inject} from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../models/contato';

@Injectable({
  providedIn: 'root',
})

export class ContatosService {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/contatos';

  findAll(): Observable<Contato[]> {
    return this.http.get<Contato[]>(this.apiUrl);
  }
}

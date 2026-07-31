import { Component, OnInit, inject } from '@angular/core';
import { ContatosService } from '../../services/contatos';
import { Contato} from '../../models/contato';

@Component({
  selector: 'app-contatos',
  imports: [],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css',
})
export class Contatos implements OnInit {
  private  contatoService = inject(ContatosService)

  contatos: Contato[] = [];

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos(): void {
    this.contatoService.findAll().subscribe({
      next: (response) => {
        this.contatos = response;
      },
      error: (error) => {
        console.error('Erro ao Buscar Contatos', error);
      }
    });
  }
}

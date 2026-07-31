import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosService } from '../../services/contatos';
import { Contato} from '../../models/contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.html',
  imports: [CommonModule],
  styleUrl: './contatos.css',
  standalone: true,
})
export class Contatos implements OnInit {
  private contatoService = inject(ContatosService);

  contatos: Contato[] = [];

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos(): void {
    this.contatoService.findAll().subscribe({
      next: (response) => {
        console.log('resposta api', response);
        this.contatos = response;
        console.log('lista no componente', this.contatos);
      },
      error: (error) => {
        console.error('Erro ao Buscar Contatos', error);
      },
    });
  }
}

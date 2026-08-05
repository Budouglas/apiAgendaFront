import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContatosService } from '../../services/contatos';
import { Contato } from '../../models/contato';

@Component({
  selector: 'app-contatos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.scss',
})
export class Contatos implements OnInit {
  private contatoService = inject(ContatosService);
  private fb = inject(FormBuilder);

  contatos: Contato[] = [];
  carregando = false;

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', [Validators.required]],
    dataNascimento: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.loadContatos();
  }

  loadContatos(): void {
    this.carregando = true;

    this.contatoService.findAll().subscribe({
      next: (response) => {
        console.log('contatos carregados:', response);
        this.contatos = response;
        this.carregando = false;
      },
      error: (error) => {
        console.error('Erro ao buscar contatos', error);
        this.contatos = [];
        this.carregando = false;
      },
    });
  }

  salvar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const novoContato = this.form.getRawValue() as Omit<Contato, 'id'>;

    this.contatoService.save(novoContato).subscribe({
      next: (contatoCriado) => {
        console.log('contato salvo:', contatoCriado);
        this.form.reset();
        this.loadContatos();
      },
      error: (error) => {
        console.error('Erro ao salvar contato', error);
      },
    });
  }

  trackById(index: number, contato: Contato): number {
    return contato.id;
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Contatos} from './pages/contatos/contatos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agenda-front');
}

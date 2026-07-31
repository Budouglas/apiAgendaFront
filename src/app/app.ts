import { Component } from '@angular/core';
import {Contatos} from './pages/contatos/contatos';

@Component({
  selector: 'app-root',
  imports: [Contatos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

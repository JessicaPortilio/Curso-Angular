import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { MeuCompoComponent } from "./meu-compo/meu-compo.component";

@Component({
  selector: 'app-root',
  imports: [CardComponent, MeuCompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OProblemaComAProjecaoDeConteudo';
}

import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CompTextoComponent } from "./comp-texto/comp-texto.component";

@Component({
  selector: 'app-root',
  imports: [CardComponent, CompTextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjecaoBasicaDeConteudo';
}

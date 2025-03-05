import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CardHeaderDirective } from "./card/directives/card-header.directive";
import { CardContentDirective } from "./card/directives/card-content.directive";

@Component({
  selector: 'app-root',
  imports: [CardComponent, CardHeaderDirective, CardContentDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CriacaoDeUmCardComProjecaoDeConteudo';
}

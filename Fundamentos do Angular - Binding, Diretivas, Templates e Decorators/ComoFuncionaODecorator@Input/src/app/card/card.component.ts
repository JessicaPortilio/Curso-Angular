import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";
import { MatSliderModule } from '@angular/material/slider';

/* Configuração do componente Card */
@Component({
  selector: 'app-card', /* Nome que será usado no HTML para renderizar este componente */
  imports: [CardButtonComponent, MatSliderModule], /* Importa o componente do botão e o módulo de slider */
  templateUrl: './card.component.html', /* Define o arquivo de template (HTML) */
  styleUrl: './card.component.scss', /* Define o arquivo de estilos (CSS) */
  // encapsulation: ViewEncapsulation.None /* Remove o isolamento de estilo para compartilhar o CSS globalmente */
})
export class CardComponent {
  /* Propriedade de entrada para o tipo do plano (usada no template) */
  @Input('planType') planType : string = '';

  /* Propriedade de entrada para o preço do plano (obrigatória, com alias 'planPrice') */
  @Input({required: true, alias: 'planPrice'}) planPrice : number = 0;
}

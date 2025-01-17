import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

/* Declaração do componente de cartão */
@Component({
  selector: 'app-card',           // Nome usado no HTML para renderizar este componente
  imports: [ButtonComponent],     // Importa o componente de botão para ser usado dentro do cartão
  templateUrl: './card.component.html', // Caminho do arquivo HTML do cartão
  styleUrl: './card.component.scss'     // Caminho do arquivo de estilos CSS do cartão
})
export class CardComponent {
  /* Define a entrada obrigatória para o tipo do plano */
  @Input({required: true})
  planType: string = ''

  /* Define a entrada obrigatória para o preço do plano */
  @Input({required: true})
  planPrice: number = 0

  /* Define a entrada obrigatória para o estilo do cartão */
  @Input({required: true})
  cardStyle: 'orange' | 'purple' = 'orange'

  /* Emite um evento quando o botão do cartão é clicado */
  @Output('buttonClicked')
  buttonClickedEmit = new EventEmitter<void>();

  /* Função chamada ao clicar no botão */
  onButtonClicked() {
    this.buttonClickedEmit.emit(); /* Emite o evento para o componente pai */
  }
}

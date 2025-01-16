import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component"; // Importa o componente de botão
import { MatSliderModule } from '@angular/material/slider'; // Importa um módulo de slider (não usado neste exemplo)

/* Configuração do componente Card */
@Component({
  selector: 'app-card', /* Define o seletor usado no HTML para renderizar este componente */
  imports: [CardButtonComponent, MatSliderModule], /* Importa dependências, como o botão personalizado e o módulo de slider */
  templateUrl: './card.component.html', /* Caminho do template HTML do componente */
  styleUrl: './card.component.scss', /* Caminho dos estilos CSS específicos do componente */
  // encapsulation: ViewEncapsulation.None /* Descomente para permitir que os estilos sejam compartilhados com outros componentes */
})
export class CardComponent {
  /* Propriedade de entrada para o tipo do plano, recebida do componente pai */
  @Input('planType') planType : string = '';

  /* Propriedade de entrada para o preço do plano. 
      O decorator @Input permite que essa propriedade receba valores vindos de outro componente. */
  @Input({required: true, alias: 'planPrice'}) planPrice : number = 0;

  /* Método que é chamado quando o botão dispara o evento 'buttonClick'.
      Recebe um valor (booleano) do componente 'CardButtonComponent'. */
  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted);
  }
}

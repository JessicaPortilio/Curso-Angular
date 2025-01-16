import { Component, Input, ViewEncapsulation } from '@angular/core'; 
import { CardButtonComponent } from "../card-button/card-button.component"; 
import { MatSliderModule } from '@angular/material/slider';

/* Configuração do componente de cartão */
@Component({
  selector: 'app-card', /* Nome usado no HTML para renderizar este componente */
  imports: [CardButtonComponent, MatSliderModule], /* Importa o componente de botão e o módulo de slider */
  templateUrl: './card.component.html', /* Caminho do template HTML do componente */
  styleUrl: './card.component.scss', /* Caminho dos estilos CSS do componente */
  // encapsulation: ViewEncapsulation.None /* Se descomentado, permite compartilhar estilos com outros componentes */
})
export class CardComponent {
  private _planType: string = ''; /* Propriedade privada para armazenar o tipo de plano */

  /* Define a entrada `planType` vinda do componente pai e converte o valor para letras maiúsculas */
  @Input('planType') 
  set planType(value: string) {
    this._planType = value.toUpperCase(); /* Converte o tipo de plano para letras maiúsculas */
  }

  /* Retorna o tipo de plano atual */
  get planType(): string {
    return this._planType;
  }

  /* Define a entrada `planPrice` vinda do componente pai */
  @Input({required: true, alias: 'planPrice'}) 
  planPrice: number = 0;

  /* Método chamado quando o botão emite o evento `buttonClick`.
     Exibe o valor emitido e o tipo de plano no console. */
  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted); /* Exibe o valor do evento no console */
    console.log('planType', this.planType); /* Exibe o tipo de plano atual no console */
  }
}

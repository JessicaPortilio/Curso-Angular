import { Component, Input, numberAttribute, ViewEncapsulation } from '@angular/core'; 
import { CardButtonComponent } from "../card-button/card-button.component"; 
import { MatSliderModule } from '@angular/material/slider';

function handlePlanType(value: string) {
  // Função que recebe um valor (tipo do plano) e o transforma em letras maiúsculas.
  console.log('handlePlanType', value); // Exibe no console o valor recebido.
  return value.toUpperCase(); // Converte o valor para letras maiúsculas e retorna.
}


/* Configuração do componente de cartão */
@Component({
  selector: 'app-card', /* Nome usado no HTML para renderizar este componente */
  imports: [CardButtonComponent, MatSliderModule], /* Importa o componente de botão e o módulo de slider */
  templateUrl: './card.component.html', /* Caminho do template HTML do componente */
  styleUrl: './card.component.scss', /* Caminho dos estilos CSS do componente */
  // encapsulation: ViewEncapsulation.None /* Se descomentado, permite compartilhar estilos com outros componentes */
})
export class CardComponent {
/* Define a classe principal do componente, que contém toda a lógica e dados necessários. */
  
  // Propriedade que permite receber um valor do componente pai.
  // - `alias: 'planType'`: o nome que o componente pai usará para passar o valor.
  // - `transform`: aplica a função `handlePlanType` para processar o valor antes de armazená-lo.
  // Armazena o tipo do plano como uma string. Por padrão, está vazia.
  @Input({alias: 'planType', transform: (value: string) =>handlePlanType(value)}) planType: string = ''
  

  /* Define a entrada `planPrice` vinda do componente pai */
  // Propriedade que permite receber o preço do plano do componente pai.
  // - `required: true`: garante que o valor seja obrigatório.
  // - `alias: 'planPrice'`: o nome que o componente pai usará para passar o preço.
  // Armazena o preço do plano como um número. Por padrão, é 0.
  @Input({required: true, alias: 'planPrice'}) 
  planPrice: number = 0;

  /* Método chamado quando o botão emite o evento `buttonClick`.
      Exibe o valor emitido e o tipo de plano no console. */
  buttonClicked(valueEmitted: boolean) {
    console.log('buttonClicked', valueEmitted); /* Exibe o valor do evento no console */
    console.log('planType', this.planType); /* Exibe o tipo de plano atual no console */
  }
}

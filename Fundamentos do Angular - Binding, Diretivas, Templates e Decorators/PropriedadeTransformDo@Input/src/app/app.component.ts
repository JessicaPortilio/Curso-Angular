import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { CardsModule } from './cards/cards.module'; 

/* Configuração do componente raiz do aplicativo */
@Component({
  selector: 'app-root', /* Nome usado no HTML para representar este componente */
  imports: [RouterOutlet, CardsModule], /* Importa o módulo de rotas e o módulo de cartões */
  templateUrl: './app.component.html', /* Define o arquivo de template HTML */
  styleUrl: './app.component.scss' /* Define o arquivo de estilos CSS */
})
export class AppComponent {
  /* Define o título do aplicativo */
  title = 'componentes-estilizacoes';

  /* Propriedade usada para armazenar o tipo de plano do cartão */
  cardPlanType = 'Simples';

  /* Propriedade usada para armazenar o preço do plano */
  cardPlanPrice = 100;

  /* Método chamado quando o usuário digita no campo de entrada.
      Atualiza a propriedade `cardPlanType` com o texto digitado. */
  handlePlanType(text: string) {
    this.cardPlanType = text;
  }
}

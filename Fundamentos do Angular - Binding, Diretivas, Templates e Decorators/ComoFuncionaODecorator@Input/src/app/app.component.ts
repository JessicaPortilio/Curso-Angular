import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsModule } from './cards/cards.module';

/* Configuração principal do aplicativo */
@Component({
  selector: 'app-root', /* Nome que será usado no HTML para representar o componente raiz */
  imports: [ RouterOutlet, CardsModule], /* Importa o módulo de rotas e o módulo de cartões */
  templateUrl: './app.component.html', /* Define o arquivo de template (HTML) */
  styleUrl: './app.component.scss' /* Define o arquivo de estilos (CSS) */
})
export class AppComponent {
  /* Define o título do aplicativo */
  title = 'componentes-estilizacoes';

  /* Propriedade usada para definir o tipo de plano do primeiro cartão */
  cardPlanType = 'Simples';

  /* Propriedade usada para definir o preço do primeiro cartão */
  cardPlanPrice = 100;
}


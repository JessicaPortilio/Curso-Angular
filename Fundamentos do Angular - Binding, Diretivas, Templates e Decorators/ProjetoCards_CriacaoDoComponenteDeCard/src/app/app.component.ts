import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";

/* Declaração do componente principal */
@Component({
  selector: 'app-root',           // Nome usado no HTML para renderizar este componente
  imports: [CardComponent],       // Importa o componente de cartão para ser usado aqui
  templateUrl: './app.component.html', // Caminho do arquivo HTML do componente pai
  styleUrl: './app.component.scss'     // Caminho do arquivo de estilos CSS do componente pai
})
export class AppComponent {
// Dados do plano Simples
simplePlan = {
  type: 'Simples',            // Nome do plano
  price: 100,                 // Preço do plano
  style: 'orange' as 'orange'             // Cor do cartão
};

// Dados do plano Completo
completePlan = {
  type: 'Completo',
  price: 250,
  style: 'purple' as 'purple'
};


 // Função chamada ao clicar no botão de qualquer cartão
  onCardButtonClicked(planType: string) {
    console.log('Plano selecionado:', planType); // Mostra o plano selecionado no console
}
}



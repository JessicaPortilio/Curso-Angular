import { CommonModule } from '@angular/common';  // Importa funcionalidades básicas do Angular
import { Component } from '@angular/core';       // Importa o decorator @Component

// Define o componente principal
@Component({
  selector: 'app-root',                         // Nome do seletor usado no HTML para este componente
  imports: [CommonModule],                      // Importa o módulo comum do Angular
  templateUrl: './app.component.html',          // Caminho para o arquivo HTML do componente
  styleUrl: './app.component.scss'              // Caminho para o arquivo de estilos do componente
})
export class AppComponent {                     // Declaração da classe principal do componente
  isGreen: boolean = true;                      // Variável que controla se o estilo verde está ativo

  // Função chamada ao clicar no botão "Verde"
  definindoComoVerde() {
    this.isGreen = true;                        // Define isGreen como verdadeiro
  }

  // Função chamada ao clicar no botão "Laranja"
  definindoComoLaranja() {
    this.isGreen = false;                       // Define isGreen como falso
  }
}

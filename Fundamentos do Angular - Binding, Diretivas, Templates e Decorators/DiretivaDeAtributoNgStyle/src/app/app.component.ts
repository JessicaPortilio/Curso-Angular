// Importa os módulos necessários do Angular
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

// Define o componente com as configurações do Angular
@Component({
  selector: 'app-root', // Define o seletor HTML que representa este componente
  imports: [CommonModule], // Importa o módulo comum para funcionalidades básicas do Angular
  templateUrl: './app.component.html', // Define o arquivo HTML que será usado pelo componente
  styleUrl: './app.component.scss' // Define o arquivo de estilos do componente
})
export class AppComponent {
  // Propriedade que define o tamanho da fonte em pixels (inicia em 15)
  fontSize: number = 15;

  // Propriedade que define a cor do texto (pode ser 'white' ou 'orange', começa como 'white')
  textColor: 'white' | 'orange' = 'white';

  // Texto do botão que alterna as cores (começa como 'Laranja')
  buttonText: 'Branco' | 'Laranja' = 'Laranja';

  // String que contém os estilos CSS para o terceiro título H1
  stringDoEstilo: string = 'font-size: 15px; color: white'; 

  // Objeto que contém os estilos CSS para o quarto título H1
  objDeEstilo = {
    'font-size': this.fontSize + 'px', // Define o tamanho da fonte com base em 'fontSize'
    'color': this.textColor, // Define a cor com base em 'textColor'
  };

  // Função chamada ao clicar no botão "+A". Ela aumenta o tamanho da fonte em 5 pixels
  aumentarTamanhoDaFonte() {
    this.fontSize += 5; // Incrementa o valor de 'fontSize'

    // Atualiza a string de estilos para refletir o novo tamanho da fonte
    this.stringDoEstilo = `font-size: ${this.fontSize}px; color: ${this.textColor};`;

    // Atualiza o objeto de estilos para refletir o novo tamanho da fonte
    this.objDeEstilo = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    };
  }

  // Função chamada ao clicar no botão de alterar cor. Alterna entre 'white' e 'orange'
  alterarCorDaFonte() {
    // Se a cor atual for branca, muda para laranja e atualiza o texto do botão
    if(this.textColor === 'white'){
      this.textColor = 'orange';
      this.buttonText = 'Branco'; // Atualiza o texto do botão para indicar a próxima ação
    } else {
      // Caso contrário, muda para branco e atualiza o texto do botão
      this.textColor = 'white';
      this.buttonText = 'Laranja';
    }

    // Atualiza a string de estilos para refletir a nova cor
    this.stringDoEstilo = `font-size: ${this.fontSize}; color: ${this.textColor};`;

    // Atualiza o objeto de estilos para refletir a nova cor
    this.objDeEstilo = {
      'font-size': this.fontSize + 'px',
      'color': this.textColor,
    };
  }
}

// Importa o componente do Angular para ser usado
import { Component } from '@angular/core';

// Importa o RouterOutlet para que o componente possa lidar com roteamento (se necessário)
import { RouterOutlet } from '@angular/router';

// Define o componente principal da aplicação
@Component({
  selector: 'app-root', // O seletor usado para identificar este componente no HTML
  imports: [RouterOutlet], // Importa o RouterOutlet para navegação (se aplicável)
  templateUrl: './app.component.html', // O arquivo que contém o HTML para este componente
  styleUrl: './app.component.scss' // O arquivo que contém os estilos (CSS/SCSS) para este componente
})
export class AppComponent {
  title = 'PropertyBinding'; // Título da aplicação (não está sendo usado diretamente)

  // Variável que controla o texto inicial no input
  inputText = "Texto Inicial Alterado";

  // Variável que controla o tipo do input (ex.: texto ou senha)
  inputType = "text";

  // Variável que indica se o input está desabilitado (true) ou habilitado (false)
  isDisabled = false;

  // Função que habilita o input, permitindo que o usuário edite o texto
  enableInput() {
    this.isDisabled = false; // Define `isDisabled` como false para habilitar o input
  }

  // Função que desabilita o input, impedindo que o usuário edite o texto
  disableInput() {
    this.isDisabled = true; // Define `isDisabled` como true para desabilitar o input
  }

  // Função que altera o tipo do input para "password" (esconde o texto digitado, como em campos de senha)
  setPassWordTypeInput() {
    this.inputType = "password"; // Muda o valor de `inputType` para "password"
  }

  // Função que altera o tipo do input para "text" (torna o texto visível novamente)
  setTextTypeInput() {
    this.inputType = "text"; // Muda o valor de `inputType` para "text"
  }

  // Função que exibe o texto atual do input no console do navegador
  logInputText() {
    console.log(this.inputText); // Mostra o valor de `inputText` no console
  }
}

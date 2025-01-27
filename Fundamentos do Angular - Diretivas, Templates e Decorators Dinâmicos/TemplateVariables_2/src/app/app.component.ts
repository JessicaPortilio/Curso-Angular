import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', // Define o seletor para este componente como "app-root".
  imports: [CommonModule, FormsModule], // Importa módulos Angular necessários para o funcionamento do template.
  templateUrl: './app.component.html', // Define o arquivo HTML associado a este componente.
  styleUrl: './app.component.scss' // Define o arquivo de estilos associado a este componente.
})
export class AppComponent {
  // // Método chamado quando o botão é clicado.
  // clicou(input: HTMLInputElement) {
  //   // Exibe o valor atual do campo de texto no console do navegador.
  //   console.log(input.value);
  //   // Atualiza o valor do campo de texto para "Atualizado".
  //   input.value = 'Atualizado';
  // }
}





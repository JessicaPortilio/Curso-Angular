// Importação do decorador Component do Angular para definir metadados do componente
import { Component } from '@angular/core';
// Importação do RouterOutlet para gerenciar navegação entre páginas (não utilizado aqui)
import { RouterOutlet } from '@angular/router';

// Definição do componente Angular
@Component({
  // Nome do seletor que será usado no HTML para instanciar este componente
  selector: 'app-root',
  // Lista de dependências externas (como RouterOutlet) que o componente pode usar
  imports: [RouterOutlet],
  // Caminho para o arquivo HTML que define a estrutura visual do componente
  templateUrl: './app.component.html',
  // Caminho para o arquivo SCSS que define o estilo visual do componente
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Propriedade do título do componente, usada para exemplificar como armazenar dados
  title = 'EventBinding';

  /**
   * Função chamada sempre que uma tecla é solta no primeiro campo de texto.
   * @param event - Evento KeyboardEvent gerado pelo Angular.
   */
  handleInputKeyup(event: KeyboardEvent) {
    // Obtém o valor atual do campo de texto usando 'event.target' como HTMLInputElement
    const currentText = (event.target as HTMLInputElement).value;
    // Mostra o texto atual no console do navegador
    console.log(currentText);
  }

  /**
   * Função chamada sempre que o conteúdo do segundo campo de texto muda.
   * @param event - Evento genérico (Event) gerado pelo Angular.
   */
  handleInputEvent(event: Event) {
    // Obtém o valor atual do campo de texto usando 'event.target' como HTMLInputElement
    const currentText = (event.target as HTMLInputElement).value;
    // Mostra o texto atual no console do navegador
    console.log(currentText);
  }

  inputValue = '';

  onInputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
  

}

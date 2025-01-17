// Importa os módulos necessários do Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Define o componente de botão com suas configurações
@Component({
  selector: 'app-button',               // Nome usado no HTML para incluir este componente
  imports: [],                          // Não há dependências externas neste componente
  templateUrl: './button.component.html', // Caminho do arquivo HTML do botão
  styleUrl: './button.component.scss'   // Caminho do arquivo de estilos CSS do botão
})
export class ButtonComponent {
  // Define uma propriedade de entrada obrigatória chamada 'buttonText'
  // Ela determina o texto exibido no botão
  @Input({ required: true, alias: 'text' }) 
  buttonText: string = '';

  // Define uma propriedade de entrada obrigatória chamada 'buttonStyle'
  // Permite ao usuário escolher entre dois estilos: 'white' ou 'purple'
  @Input({ required: true, alias: 'style' }) 
  buttonStyle: 'white' | 'purple' = 'white';

  // Define uma propriedade de entrada chamada 'isDisabled'
  // Controla se o botão está desabilitado ou não
  @Input({ alias: 'disabled' }) 
  isDisabled: boolean = false;

  // Cria um evento personalizado chamado 'buttonClickedEmit'
  // Este evento será disparado para o componente pai quando o botão for clicado
  @Output('clicked') 
  buttonClickedEmit = new EventEmitter<void>();

  // Método chamado quando o botão é clicado
  onButtonClicked() {
    // Emite o evento 'buttonClickedEmit' para informar o componente pai
    this.buttonClickedEmit.emit();
  }
  
}

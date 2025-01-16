import { booleanAttribute, Component, EventEmitter, Input, Output } from '@angular/core'; 
// Importa ferramentas do Angular para criar o componente e trabalhar com eventos

/* Configuração principal do componente do botão */
@Component({
  selector: 'app-card-button', /* Nome usado no HTML para adicionar este botão */
  imports: [], /* Nenhum módulo externo está sendo usado neste componente */
  templateUrl: './card-button.component.html', /* Caminho do arquivo HTML deste botão */
  styleUrl: './card-button.component.scss' /* Caminho do arquivo CSS que estiliza este botão */
})
export class CardButtonComponent {
  // Propriedade interna usada apenas como teste, ela armazena um valor booleano
  propTest: boolean = false;

  // Propriedade de entrada para controlar se o botão está desativado
  // O decorator `@Input` permite receber valores de outro componente
  @Input({ transform: booleanAttribute }) buttonDisabled: boolean = false;

  /* Evento personalizado chamado 'buttonClick', que pode enviar dados para o componente pai */
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  /* Método que será executado quando o botão for clicado */
  onButtonClick() {
    console.log('onButtonClick'); // Exibe uma mensagem no console indicando que o botão foi clicado

    // Envia o valor da propriedade 'propTest' para o componente pai através do evento personalizado
    this.buttonClickEmitter.emit(this.propTest);
  }
}

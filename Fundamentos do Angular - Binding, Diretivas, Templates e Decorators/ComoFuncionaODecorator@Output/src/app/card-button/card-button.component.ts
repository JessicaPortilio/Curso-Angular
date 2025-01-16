import { Component, EventEmitter, Output } from '@angular/core'; // Importa o EventEmitter e o Output para trabalhar com eventos personalizados

/* Configuração do componente de botão */
@Component({
  selector: 'app-card-button', /* Define o seletor usado no HTML para este botão */
  imports: [], /* Não há módulos externos sendo usados aqui */
  templateUrl: './card-button.component.html', /* Caminho do template HTML do componente */
  styleUrl: './card-button.component.scss' /* Caminho dos estilos CSS específicos deste botão */
})
export class CardButtonComponent {
  /* Propriedade interna usada como valor de teste (para demonstrar a emissão de um evento) */
  propTest: boolean = false;

  /* Evento personalizado que emite valores para o componente pai.
     É usado no HTML do botão para emitir valores ao clicar. */
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  /* Método chamado quando o botão é clicado */
  onButtonClick() {
    console.log('onButtonClick'); // Log no console para indicar que o botão foi clicado

    /* Emite o valor de 'propTest' para o componente pai através do evento 'buttonClick' */
    this.buttonClickEmitter.emit(this.propTest);
  }
}

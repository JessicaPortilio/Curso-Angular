// Este arquivo define o componente PersonComponent, que é usado para representar cada pessoa individualmente na lista.
// import: Importa módulos do Angular:
// Component: Para definir este arquivo como um componente do Angular.
// EventEmitter: Permite emitir eventos de saída (interações que o componente "anuncia").
// Input: Para receber dados de outros componentes.
// Output: Para enviar eventos para outros componentes.
import { Component, EventEmitter, Input, Output } from '@angular/core';

// selector: Define como o componente será usado no HTML.
// templateUrl: O arquivo que contém o design/HTML para este componente.
// styleUrl: O arquivo que contém o CSS específico deste componente.
@Component({
  selector: 'app-person', // Nome do componente usado no HTML, por exemplo: <app-person></app-person>
  imports: [], // Define os módulos necessários (vazio porque não há dependências extras aqui).
  templateUrl: './person.component.html', // O arquivo HTML associado a este componente.
  styleUrl: './person.component.scss' // O arquivo de estilos associado a este componente.
})

// export class: Define uma classe para o componente. É como um "molde" que controla a lógica e o comportamento do componente.
export class PersonComponent {

  // @Input: Indica que o valor de personName virá de fora, ou seja, será passado pelo componente pai.
  @Input({required: true}) personName: string = ''; // string = '': O valor inicial é uma string vazia, garantindo que a propriedade tenha um tipo definido.
  // Os outros @Inputs seguem o mesmo padrão:
  // personAge: Idade da pessoa.
  @Input({required: true}) personAge: number = 0;
  // personIndex: Índice da pessoa na lista.
  @Input({required: true}) personIndex: number = 0;
  // isFirst: Se a pessoa é a primeira da lista.
  @Input({required: true}) isFirst: boolean = false;
  // isLast: Se a pessoa é a última da lista.
  @Input({required: true}) isLast: boolean = false;
  // isOdd: Se o índice da pessoa é ímpar.
  @Input({required: true}) isOdd: boolean = false;
  // isSelected: Se o item está selecionado.
  @Input({required: true}) isSelected: boolean = false;

  //  @Output: Define um evento que este componente pode emitir.
  // EventEmitter<number>: Indica que o evento emitirá um número (o índice da pessoa).
  @Output() onPersonSelectEmitt = new EventEmitter<number>();


  // selectPerson: Função chamada ao clicar no item. Emite o índice (personIndex) usando o evento onPersonSelectEmitt.
  selectPerson(){
    this.onPersonSelectEmitt.emit(this.personIndex);
  }
}

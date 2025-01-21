import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PersonComponent } from "./person/person.component";

@Component({
  selector: 'app-root', // Nome do componente para ser usado no HTML
  imports: [CommonModule, PersonComponent], // Módulos que o componente utiliza
  templateUrl: './app.component.html', // Template HTML associado ao componente
  styleUrl: './app.component.scss' // Arquivo de estilos associado ao componente
})
export class AppComponent {
  personSelectedIndex: number | undefined = undefined; 
  // Variável que guarda o índice da pessoa selecionada. Inicialmente indefinida.

  // Este é o componente principal que controla a lista e gerencia os eventos.
  // Cria uma lista de objetos, cada um representando uma pessoa com nome (name) e idade (age).
  listPessoas = [
    {name: 'Carlos Cunha', age: 26,}, // Objeto representando uma pessoa
    {name: 'Amanda da Silva', age: 34,}, // Outra pessoa
    {name: 'Paulo Freitas', age: 18,}, // Outra pessoa
    {name: 'Fernada Lopes', age: 53,}, // Outra pessoa
  ];

  // Recebe o índice de uma pessoa e atualiza personSelectedIndex.
  selectPerson(index: number) {
    console.log(index); // Exibe o índice clicado no console
    this.personSelectedIndex = index; // Atualiza o índice selecionado
  }

}

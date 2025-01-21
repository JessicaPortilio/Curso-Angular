import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Nome do componente para ser usado no HTML
  imports: [CommonModule], // Módulos que o componente utiliza
  templateUrl: './app.component.html', // Template HTML associado ao componente
  styleUrl: './app.component.scss' // Arquivo de estilos associado ao componente
})
export class AppComponent {
  personSelectedIndex: number | undefined = undefined; 
  // Variável que guarda o índice da pessoa selecionada. Inicialmente indefinida.

  listPessoas = [
    {name: 'Carlos Cunha', age: 26,}, // Objeto representando uma pessoa
    {name: 'Amanda da Silva', age: 34,}, // Outra pessoa
    {name: 'Paulo Freitas', age: 18,}, // Outra pessoa
    {name: 'Fernada Lopes', age: 53,}, // Outra pessoa
  ];

  selectPerson(index: number) {
    // Função chamada ao clicar em um item. Recebe o índice do item clicado.
    console.log(index); // Exibe o índice no console
    this.personSelectedIndex = index; // Armazena o índice selecionado
  }
}

import { CommonModule } from '@angular/common';
// Importa o módulo `CommonModule`, que contém as diretivas básicas do Angular, como `ngIf` e `ngFor`.

import { Component, ViewChild } from '@angular/core';
// Importa o decorador `Component` para definir o componente e `ViewChild` para acessar o componente filho.

import { FormsModule } from '@angular/forms';
// Importa o módulo `FormsModule` para suporte a formulários no Angular (não utilizado diretamente neste exemplo).

import { FilhoComponent } from './filho/filho.component';
// Importa a classe do componente filho para que o pai possa interagir com ele.

@Component({
  selector: 'app-root', 
  // Define o seletor do componente pai. Esse componente será o ponto de entrada principal da aplicação.

  imports: [CommonModule, FormsModule, FilhoComponent], 
  // Declara os módulos e componentes necessários para este componente pai.

  templateUrl: './app.component.html', 
  // Define o arquivo de template HTML associado ao componente pai.

  styleUrl: './app.component.scss' 
  // Define o arquivo de estilos CSS/SCSS associado ao componente pai.
})
export class AppComponent {
  // Declara a classe `AppComponent`, que contém a lógica do componente pai.

  @ViewChild('filhoComp') 
  // Usa o decorador `@ViewChild` para obter acesso ao componente filho no template.

  filhoCompRef!: FilhoComponent; 
  // Cria uma referência do tipo `FilhoComponent` chamada `filhoCompRef` para acessar o componente filho.

  hello() {
    // Declara o método `hello`, que será chamado quando o botão no template do componente pai for clicado.

    this.filhoCompRef.dizerOi();
    // Chama o método `dizerOi()` definido no componente filho, exibindo a mensagem "Oi!!!!" em um alerta.

    this.filhoCompRef.message = 'Eu disse "Oi"';
    // Altera a mensagem do componente filho para "Eu disse 'Oi'", atualizando o conteúdo exibido no template do filho.
  }
}

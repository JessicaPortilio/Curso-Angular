// Importa o módulo CommonModule, que fornece funcionalidades essenciais do Angular, como diretivas básicas (*ngIf, *ngFor).
import { CommonModule } from '@angular/common';

// Importa o serviço ChangeDetectorRef, usado para forçar a detecção de mudanças no Angular.
import { ChangeDetectorRef, Component } from '@angular/core';

// Importa o módulo FormsModule, que permite trabalhar com formulários e vinculação bidirecional de dados (Two-way Data Binding).
import { FormsModule } from '@angular/forms';

// Define um componente Angular, que é uma parte da interface do usuário (UI) da aplicação.
@Component({
  selector: 'app-root', // Nome do seletor usado no HTML para representar este componente.
  imports: [CommonModule, FormsModule], // Declara os módulos que este componente utiliza.
  templateUrl: './app.component.html', // Define o caminho para o arquivo HTML que contém o layout da interface do componente.
  styleUrl: './app.component.scss' // Define o caminho para o arquivo de estilos (CSS/SCSS) que estiliza o componente.
})
export class AppComponent { // Define a classe que contém toda a lógica deste componente.

  // O construtor é executado quando o componente é inicializado. Ele injeta dependências necessárias.
  constructor(
    private _cdRef: ChangeDetectorRef // Injeta o serviço ChangeDetectorRef para manipular a detecção de mudanças manualmente.
  ) {}

  // Função chamada ao clicar no botão para forçar a detecção de mudanças na interface.
  changeDetection() {
    this._cdRef.detectChanges(); // Força o Angular a verificar e atualizar a interface com base nos dados mais recentes.
  }

  // Cria uma variável chamada `teste` e atribui a ela o valor inicial 'Jessica'.
  // Isso significa que, quando a página carregar, o campo de entrada exibirá o texto 'Jessica' e ele também será mostrado na tela.
  // teste = 'Jessica';

}

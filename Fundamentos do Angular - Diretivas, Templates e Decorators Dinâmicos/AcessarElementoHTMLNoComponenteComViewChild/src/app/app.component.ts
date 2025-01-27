import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// import { CommonModule } from '@angular/common';
// Importa o módulo CommonModule, que fornece funcionalidades básicas do Angular, como diretivas (ngIf, ngFor).
// import { Component, ElementRef, ViewChild } from '@angular/core';
// Component: Usado para criar e configurar um componente Angular.
// ElementRef: Uma classe que permite acessar elementos DOM diretamente no TypeScript.
// ViewChild: Um decorador usado para vincular uma variável de template (como #meuInput) ao código do componente.
// import { FormsModule } from '@angular/forms';
// Importa o módulo de formulários, que permite manipular e vincular formulários e entradas no Angular.


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// O decorador @ViewChild conecta a variável de template #meuInput definida no HTML a uma propriedade da classe.
// Ele permite acessar e manipular o campo de texto diretamente no código do TypeScript.
  @ViewChild('meuInput')
// Define a propriedade meuInputEl como um ElementRef, que é uma referência ao elemento DOM (<input>).
// O ! indica que a propriedade será inicializada pelo Angular, então não é necessário inicializá-la manualmente.
  meuInputEl!: ElementRef<HTMLInputElement>;

  // Define o método que será chamado ao clicar no botão.
  updateInputText(){
    // Exibe no console a referência ao elemento de entrada (<input>), permitindo inspecionar suas propriedades e métodos.
    console.log(this.meuInputEl)
    // Acessa diretamente o elemento DOM por meio da propriedade nativeElement.
    // Define o valor do campo de texto para 'Texto Atualizado!'.
    this.meuInputEl.nativeElement.value = 'Texto Atualizado!'
  }

// Fluxo geral do programa:
// O usuário digita algo no campo de texto (<input>).
// Ao clicar no botão "Atualizar", o método updateInputText() é chamado.
// Esse método usa o @ViewChild para acessar o campo de entrada diretamente e altera o valor digitado para 'Texto Atualizado!'.
// O novo valor é exibido no campo, e a referência ao elemento é exibida no console.
  
  // Função que foca o campo de entrada usando a referência criada no template
  focus() {
    this.meuInputEl.nativeElement.focus(); 
    // Acessa o elemento HTML correspondente e define o foco nele
  }

  // Decorator que busca a referência ao elemento 'minhaDiv' criado no template
  @ViewChild('minhaDiv')
  minhaDivEl!: ElementRef<HTMLDivElement>;
  // Cria uma variável chamada 'minhaDivEl' que armazenará a referência à <div>.
  // O tipo `HTMLDivElement` ajuda o TypeScript a saber que este elemento é uma <div>.

  // Função que atualiza o conteúdo de texto da <div>
  updateDivContent(){
    this.minhaDivEl.nativeElement.textContent = 'Texto Trocado'
    // Acessa o elemento HTML (a <div>) e define seu conteúdo de texto para 'Texto Trocado'
  }

}


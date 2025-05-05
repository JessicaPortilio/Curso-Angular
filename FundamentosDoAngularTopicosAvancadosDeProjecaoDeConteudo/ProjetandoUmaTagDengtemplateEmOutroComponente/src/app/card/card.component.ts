import { CommonModule } from '@angular/common';
// Importa funcionalidades básicas do Angular, como diretivas ngIf, ngFor e ngTemplateOutlet.

import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
// - Component: para criar o componente.
// - OnInit: ciclo de vida executado após a criação do componente.
// - AfterContentInit: ciclo de vida que roda depois que o conteúdo <ng-template> é projetado.
// - ContentChild: decorador que permite pegar uma referência de conteúdo passado pelo componente pai (usando #meuTemplate).
// - TemplateRef: tipo utilizado para lidar com templates (<ng-template>).

import { FormsModule } from '@angular/forms';
// Importa funcionalidades para lidar com formulários (não está sendo usado neste exemplo, mas foi incluído).

@Component({
  selector: 'app-card',
  // Define que este componente será usado com a tag <app-card>.

  imports: [CommonModule, FormsModule],
  // Declara os módulos que este componente precisa para funcionar.

  templateUrl: './card.component.html',
  // Define o arquivo HTML que será usado como estrutura visual do componente.

  styleUrl: './card.component.scss'
  // Define o arquivo de estilo CSS (ou SCSS) para este componente.
})
export class CardComponent implements OnInit, AfterContentInit {
  // Criação da classe do componente, implementando os ciclos de vida OnInit e AfterContentInit.

  @ContentChild('meuTemplate') content!: TemplateRef<any>;
  // Captura o template passado com a referência #meuTemplate a partir do componente pai.
  // Esse template será armazenado na variável `content`.

  ngOnInit(): void {
    // Método chamado automaticamente após a criação inicial do componente.
    console.log('OnInit', this.content);
    // Mostra no console o valor da variável `content` (ainda pode ser undefined neste momento).
  }

  ngAfterContentInit(): void {
    // Método chamado automaticamente depois que o conteúdo filho (como ng-template) for 
    // inserido no componente.
    console.log('AfterContentInit', this.content);
    // Aqui sim o template já estará disponível. Isso confirma que o conteúdo foi projetado com sucesso.
  }
}

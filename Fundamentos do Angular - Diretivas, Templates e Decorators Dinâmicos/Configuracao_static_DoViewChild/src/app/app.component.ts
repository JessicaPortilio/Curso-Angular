import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Importações necessárias para o componente Angular:
// - `CommonModule`: fornece funcionalidades comuns usadas em Angular, como diretivas (ex.: *ngIf, *ngFor).
// - `AfterViewInit`: um ciclo de vida do Angular que é executado após a inicialização da view (a parte visual).
// - `OnInit`: outro ciclo de vida executado ao iniciar o componente.
// - `ElementRef`: permite acessar diretamente elementos HTML no DOM.
// - `ViewChild`: decorador usado para referenciar elementos HTML ou componentes filhos no template.
// - `FormsModule`: permite usar recursos de formulários como two-way binding.

@Component({
  selector: 'app-root', // O nome da tag personalizada para usar este componente.
  imports: [CommonModule, FormsModule], // Módulos que o componente precisa para funcionar.
  templateUrl: './app.component.html', // Caminho do arquivo HTML que define a interface deste componente.
  styleUrl: './app.component.scss' // Caminho do arquivo SCSS para definir os estilos deste componente.
})
// Define a classe do componente, que implementa dois ciclos de vida do Angular: OnInit e AfterViewInit.
export class AppComponent implements OnInit, AfterViewInit{
  // O decorador `@ViewChild` captura o elemento HTML identificado pelo template reference variable `#meuInput`.
  // indica que o elemento será acessado durante o ciclo de vida `AfterViewInit`.
  // @ViewChild('meuInput')


  // O decorador `@ViewChild` captura o elemento HTML identificado pelo template reference variable `#meuInput`.
  // O parâmetro `{ static: true }` indica que o elemento será acessado durante o ciclo de vida `OnInit`.
  @ViewChild('meuInput', {static: true})
  meuInputEL!: ElementRef<HTMLInputElement>;
  // Armazena a referência ao elemento HTML em `meuInputEL`. Ele é do tipo `ElementRef` que representa o elemento DOM.


  // Método chamado quando o componente é criado. Geralmente usado para inicializar propriedades.
  constructor() {
    // Mostra no console que o construtor foi executado. Útil para entender a ordem de execução do código.
    console.log('Constructor');
  }
  
  // Método executado logo após o construtor, durante a fase de inicialização do componente.
  ngOnInit() {
    // Exibe no console o valor atual da propriedade `meuInputEL`. Pode ser `undefined` se o elemento ainda não estiver disponível no DOM.
    console.log('ngOnInit', this.meuInputEL)

    // this.meuInputEL.nativeElement.focus()
    // Código comentado. Ele tentaria colocar o foco no campo de texto durante a fase `OnInit`. 
    // Não funcionaria neste ciclo se `static: true` não estiver configurado.
  }

  // Método chamado após a view (interface gráfica) ser completamente carregada.
  ngAfterViewInit(){
    // Exibe no console a referência ao elemento HTML capturado por `@ViewChild`. Neste momento, o elemento está disponível.
    console.log('ngAfterViewInit', this.meuInputEL)
    // Define o foco no campo de texto identificado como `#meuInput`. Isso faz o cursor aparecer automaticamente nele.
    this.meuInputEL.nativeElement.focus()
  }
}

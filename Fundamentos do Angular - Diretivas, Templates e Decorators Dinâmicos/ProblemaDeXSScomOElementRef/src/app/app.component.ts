import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FocusSecondInputDirective } from './directivers/focus-second-input.directive';
import { TesteService } from './services/teste.service';
import { XssComponent } from "./xss/xss.component";

// 🔹 Importamos os módulos necessários:
// - `Component` → Define um componente Angular.
// - `OnInit` → Ciclo de vida que roda quando o componente é inicializado.
// - `AfterViewInit` → Ciclo de vida que roda depois que a visualização do componente foi carregada.
// - `ElementRef` → Permite acessar diretamente elementos do DOM no Angular.
// - `ViewChild` → Permite capturar referências a elementos do HTML dentro do TypeScript.

@Component({
  selector: 'app-root', // 🔹 Define o seletor usado para referenciar esse componente no HTML.
  imports: [FocusSecondInputDirective, XssComponent], // 🔹 Importamos a diretiva personalizada `FocusSecondInputDirective` para uso no HTML.
  templateUrl: './app.component.html', // 🔹 Define o arquivo HTML do componente.
  styleUrl: './app.component.scss' // 🔹 Define o arquivo de estilos do componente.
})
export class AppComponent {
  constructor(
    private readonly _elRef: ElementRef, // 🔹 `ElementRef` permite acessar diretamente o elemento raiz do componente.
    private readonly _testeService: TesteService // 🔹 Injetamos o serviço `TesteService` para criar elementos dinamicamente.
  ) {}

  // 🔹 Método chamado quando o botão for clicado.
  createElement() {
    this._testeService.create(this._elRef); // 🔹 Chama o método `create()` do serviço e passa o elemento do componente.
  }
}


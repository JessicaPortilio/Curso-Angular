import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FocusSecondInputDirective } from './directivers/focus-second-input.directive';

// Importamos os módulos necessários:

// Component → Define um componente Angular.
// OnInit → Um ciclo de vida que roda quando o componente é inicializado.
// AfterViewInit → Um ciclo de vida que roda depois que a visualização do componente foi carregada.
// ElementRef → Permite acessar diretamente elementos do DOM no Angular.
// ViewChild → Permite capturar referências a elementos do HTML dentro do TypeScript.


// Define o componente principal (app-root) da aplicação.
// Importa o HTML (app.component.html) e o arquivo de estilos (app.component.scss).
@Component({
  selector: 'app-root', 
  imports: [FocusSecondInputDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}


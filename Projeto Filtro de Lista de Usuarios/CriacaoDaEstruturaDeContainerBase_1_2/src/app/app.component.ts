import { Component } from '@angular/core';
// Importa a classe `Component`, que é usada para criar componentes no Angular.

import { ComponentsModule } from './components/components.module';
// Importa o `ComponentsModule` para usar seus componentes no aplicativo principal.

import { CommonModule } from '@angular/common';
// Importa o `CommonModule`, que fornece diretivas comuns como *ngIf e *ngFor.

@Component({
  selector: 'app-root',
  // Define o seletor CSS para este componente. Ele será usado no HTML para renderizar este componente.

  imports: [ComponentsModule, CommonModule],
  // Especifica os módulos que este componente precisa para funcionar corretamente.

  templateUrl: './app.component.html',
  // Define o arquivo HTML que será usado como modelo para este componente.

  styleUrl: './app.component.scss'
  // Define o arquivo de estilos específico para este componente.
})
export class AppComponent {
  // Cria a classe `AppComponent`, que é o componente raiz da aplicação.
}


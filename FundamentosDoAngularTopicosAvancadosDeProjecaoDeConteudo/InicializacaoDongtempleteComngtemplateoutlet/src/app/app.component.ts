import { Component } from '@angular/core';
// Importa a funcionalidade necessária para definir um componente no Angular.

import { MeuCompComponent } from "./meu-comp/meu-comp.component"; 
// Importa o componente `MeuCompComponent`, pois será utilizado neste arquivo.

import { CommonModule } from '@angular/common';
// Importa `CommonModule`, que contém diretivas importantes do Angular, como `ngTemplateOutlet`.

@Component({
  selector: 'app-root', 
  // Define que este é o componente principal da aplicação e será usado com a tag <app-root>.

  imports: [MeuCompComponent, CommonModule], 
  // Lista os módulos e componentes que este componente precisa para funcionar corretamente.
  // `MeuCompComponent` é necessário para podermos utilizá-lo na tela.
  // `CommonModule` é necessário para permitir o uso de `ngTemplateOutlet`.

  templateUrl: './ng-template-outlet/ex3.html', 
  // Define o arquivo HTML que será carregado neste componente.

  styleUrl: './app.component.scss'
  // Define o arquivo de estilos CSS/SCSS usado neste componente.
})
export class AppComponent { 
  // Declaração da classe do componente principal `AppComponent`.

  title = 'ngcontainerVSngtemplate'; 
  // Define uma variável `title` que contém o nome do projeto.

  condition: boolean = true;
  // Define uma variável chamada `condition` e atribui a ela o valor `true` por padrão.
  // Essa variável será usada no `ngIf` para determinar qual template será renderizado.

}

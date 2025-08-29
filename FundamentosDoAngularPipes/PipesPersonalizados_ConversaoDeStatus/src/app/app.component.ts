// Importa funcionalidades que o Angular já fornece.
// CommonModule traz diretivas/recursos comuns como *ngIf e *ngFor.
import { CommonModule } from '@angular/common';

// Importa o decorator @Component, necessário para transformar a classe em um componente Angular.
import { Component } from '@angular/core';

// FormsModule permite usar recursos de formulários (ex.: [(ngModel)]).
import { FormsModule } from '@angular/forms';

// RouterOutlet é um "espaço" no template onde o Angular injeta componentes filhos quando usamos rotas.
// Ou seja: é onde as páginas filhas aparecem dentro deste componente quando navegamos.
import { RouterOutlet } from '@angular/router';

// Importa o pipe que criamos (arquivo: ./pipes/user-status.pipe).
// Esse pipe converte um número (status) em texto legível (ex.: 1 -> "Ativo").
import { UserStatusPipe } from './pipes/user-status.pipe';

/*
  Enum (enumeração) é uma forma de dar nomes a números.
  Em vez de usar "1" e "2" espalhados pelo código, usamos nomes claros: ATIVO, INATIVO.
  Assim o código fica mais legível e menos propenso a erro.
*/
export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

// @Component configura o componente: qual tag HTML ele usa, onde está o template, etc.
@Component({
  // Esta será a tag HTML do componente quando for inserida em outras páginas: <app-root></app-root>
  selector: 'app-root',

  imports: [RouterOutlet, CommonModule, FormsModule, UserStatusPipe],

  // Caminho para o arquivo HTML que contém a marcação (template) deste componente.
  templateUrl: './app.component.html',

  // Caminho para o arquivo SCSS com os estilos específicos deste componente.
  styleUrl: './app.component.scss'
})

// A classe do componente é o "cérebro": aqui ficam dados e lógica que o template pode usar.
export class AppComponent {
  // Título simples do app — pode ser exibido no template via {{ title }}.
  title = 'SintaxeBasicaDosPipes';

  /*
    Objeto "pessoa": contém dados sobre uma pessoa.
    - nome: texto
    - idade: número
    - status: usamos o enum UserStatusEnum para deixar claro o significado do número
      (por exemplo, UserStatusEnum.ATIVO equivale ao valor 1).
    Esses valores podem ser usados no template (HTML) com interpolação: {{ pessoa.nome }} etc.
  */
  pessoa = {
    nome: 'Jessica',
    idade: 26,
    status: UserStatusEnum.ATIVO,
  };
}

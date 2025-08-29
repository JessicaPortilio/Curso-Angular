// Importações básicas do Angular e de funcionalidades que usaremos.
// CommonModule traz diretivas e pipes básicos usados em templates (*ngIf, *ngFor, etc).
import { CommonModule } from '@angular/common';

// Importa o decorator @Component, que transforma a classe abaixo em um componente Angular.
import { Component } from '@angular/core';

// FormsModule permite que o componente use recursos de formulários (ex.: [(ngModel)]).
import { FormsModule } from '@angular/forms';

// (opcional) importe pipes/customizações que você criou localmente.
import { UserStatusPipe } from './pipes/user-status.pipe';
import { TrancatePipe } from './pipes/trancate.pipe';

/*
  Enum (UserStatusEnum):
  - É uma forma de dar nomes a números.
  - Em vez de usar "1" e "2" em vários lugares, usamos nomes descritivos.
  - Ex.: UserStatusEnum.ATIVO == 1, UserStatusEnum.INATIVO == 2
*/
export enum UserStatusEnum {
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  // Tag HTML que representa este componente: <app-root></app-root>
  selector: 'app-root',

  /*
    imports: [ ... ]
    - Aqui você lista módulos e declarações que este componente usa.
  */
  imports: [ 
    CommonModule, 
    FormsModule,
    UserStatusPipe, 
    TrancatePipe
  ],

  // Arquivo HTML que contém a marcação exibida pelo componente.
  templateUrl: './app.component.html',

  // Arquivo (ou arquivos) de estilos do componente.
  // Observação: o mais comum é `styleUrls: ['./app.component.scss']` (observe o plural).
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Propriedade simples, pode ser exibida no HTML via {{ title }}.
  title = 'SintaxeBasicaDosPipes';

  /*
    objeto "pessoa":
    - nome: string
    - idade: number
    - status: usa o enum para facilitar leitura (UserStatusEnum.ATIVO)
    Esses valores ficam disponíveis no template (HTML) por interpolação: {{ pessoa.nome }}.
  */
  pessoa = {
    nome: 'Jessica',
    idade: 26,
    status: UserStatusEnum.ATIVO,
  };

}

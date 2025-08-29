// IMPORTS
// CommonModule: conjunto de diretivas/pipes úteis para templates (*ngIf, *ngFor, date, etc).
import { CommonModule } from '@angular/common';

// Component e OnInit: Component transforma a classe em componente Angular;
// OnInit é uma interface que permite executar código quando o componente inicia.
import { Component, OnInit } from '@angular/core';

// BrowserModule normalmente é importado no AppModule (módulo raiz).
// Não é comum importar BrowserModule diretamente dentro de um componente.
// Se não estiver usando aqui, pode remover esta importação.
import { BrowserModule } from '@angular/platform-browser';


/*
  @Component: metadados que informam ao Angular como usar este componente.
  - selector: tag HTML que representa o componente (<app-root>).
  - imports: módulos/declarações que o componente usa.
      > Obs importante: a propriedade `imports` funciona diretamente apenas quando o componente
        é declarado como `standalone: true`. Se o componente NÃO for standalone, então
        CommonModule (e outros) devem ser registrados no AppModule (app.module.ts).
  - templateUrl / styleUrl: caminhos para o HTML e CSS do componente.
      > Observação: o padrão do Angular é usar `styleUrls` (plural) com um array.
*/
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  // minhaData: string em formato ISO 8601 com Z (UTC).
  // Ex.: '2026-08-26T16:20:00.000Z' significa 26/08/2026 às 16:20 em UTC (tempo universal).
  minhaData: string = '2026-08-26T16:20:00.000Z';

  // minhaDataObj: a mesma data, já convertida para um objeto Date do JavaScript.
  // new Date(...) interpreta corretamente a string ISO com Z como UTC.
  minhaDataObj: Date = new Date('2026-08-26T16:20:00.000Z');

  // ngOnInit: executado quando o componente inicializa.
  ngOnInit() {
    // Ao criar um Date a partir da string e mostrar no console, o navegador costuma
    // exibir o objeto Date ajustado para o fuso horário local do usuário.
    // Ex.: se o navegador estiver em America/Maceio (UTC-3), 16:20 UTC aparece como 13:20 local.
    console.log('Data convertida para região:', new Date(this.minhaData));

    // toUTCString() mostra a data em texto no fuso UTC (sem ajuste para o fuso local).
    // Ex.: "Thu, 26 Aug 2026 16:20:00 GMT"
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString());

    // getTime() retorna o timestamp (em MILISSEGUNDOS) desde 1970-01-01T00:00:00Z.
    // Para a data '2026-08-26T16:20:00.000Z' o timestamp é:
    // 1787761200000 (milissegundos).
    console.log('Timestamp', new Date(this.minhaData).getTime()); // -> 1787761200000

    // Mostra o objeto Date que definimos em minhaDataObj (também será exibido no fuso local).
    console.log(this.minhaDataObj);
  }
}

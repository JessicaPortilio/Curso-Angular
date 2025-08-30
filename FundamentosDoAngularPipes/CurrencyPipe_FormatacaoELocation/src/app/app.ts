// CommonModule: fornece diretivas e pipes básicos (ex.: *ngIf, *ngFor, date, number, currency).
import { CommonModule } from '@angular/common';

// Component: transforma a classe em um componente Angular.
// LOCALE_ID: permite definir o idioma/formatação padrão (pt-BR, en-US, etc).
import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';

// RouterOutlet: “janela” onde o Angular renderiza páginas/rotas filhas.
import { RouterOutlet } from '@angular/router';

// Funções/dados para registrar o locale (conjunto de regras de formatação) pt-BR.
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Aqui informamos ao Angular como formatar números, datas e moedas em "pt-BR".
// Sem registrar, alguns nomes e formatos podem aparecer em inglês.
registerLocaleData(localePt, 'pt-BR');

@Component({
  // Tag HTML deste componente: <app-root></app-root>
  selector: 'app-root',

  // Módulos e componentes usados dentro deste componente.
  imports: [RouterOutlet, CommonModule],

  // "providers" aqui definem configurações “padrão” para este componente (e filhos):
  providers: [
    {
      // Define o locale padrão como pt-BR (afeta formatação de números, datas, moeda…)
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    {
      // Define a moeda padrão (quando você NÃO informa o código no pipe | currency).
      // Aqui será BRL (Real), então {{ 1200.99 | currency }} já usa R$ por padrão.
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    }
  ],

  // Caminhos do template (HTML) e estilos (SCSS) deste componente.
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Só um título demonstrativo (pode aparecer no template com {{ title }} se desejar).
  protected title = 'CurrencyPipe_FormatacaoELocation';
}

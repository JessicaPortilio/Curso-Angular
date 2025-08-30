// CommonModule: traz diretivas e pipes úteis (por exemplo: *ngIf, *ngFor, pipe 'date', pipe 'number', etc).
import { CommonModule } from '@angular/common';

// Component: decorator que transforma a classe em um componente do Angular.
// LOCALE_ID: token que define o idioma/locale padrão da aplicação.
// OnInit: interface para executar código quando o componente inicializa.
import { Component, LOCALE_ID, OnInit } from '@angular/core';

// RouterOutlet: se você usar roteamento, esse "outlet" é o local onde as páginas filhas aparecem.
import { RouterOutlet } from '@angular/router';

// registerLocaleData + localePt: registra os dados de formatação para pt-BR
// (nomes de meses, formatos de número, etc). Sem isso alguns pipes podem não
// mostrar meses/dias em português corretamente.
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

// Registrar o locale 'pt-BR' na aplicação.
// Isso adiciona as regras de formatação para português do Brasil.
registerLocaleData(localePt, 'pt-BR');

@Component({
  selector: 'app-root', // Tag HTML que representa esse componente: <app-root>
  imports: [RouterOutlet, CommonModule], // módulos que o template pode precisar
  providers: [
    // Define o LOCALE_ID padrão como 'pt-BR' para toda a app (neste componente).
    // Assim, pipes como date/number vão usar pt-BR por padrão, a menos que você force outro locale no pipe.
    { provide: LOCALE_ID, useValue: 'pt-BR' } 
  ],
  templateUrl: './app.html', // arquivo HTML do template
  styleUrl: './app.scss'     // arquivo de estilos do componente
})
export class App implements OnInit {
  // Título só para demonstração (pode ser usado no template via {{ title }}).
  protected title = 'DecimalPipe_FormatacaoELocation';

  // ngOnInit executa quando o componente é inicializado.
  ngOnInit() {
    // Exemplo de número no console (apenas demonstração).
    const numero = 1200.99;
    console.log(numero);
    // Observação: o importante deste componente é o uso do LOCALE_ID + registerLocaleData
    // para demonstrar o comportamento do pipe 'number' em pt-BR.
  }
}

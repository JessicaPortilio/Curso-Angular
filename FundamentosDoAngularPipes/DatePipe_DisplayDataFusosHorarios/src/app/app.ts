// Importamos coisas do Angular que usamos neste arquivo.
// CommonModule traz diretivas e pipes úteis para templates (ex.: *ngIf, *ngFor) — geralmente usado em módulos/componentes que precisam dessas diretivas.
import { CommonModule } from '@angular/common';

// Component é o decorator que transforma a classe abaixo em um componente Angular (uma "peça" da interface).
import { Component, OnInit } from '@angular/core';

// BrowserModule é normalmente importado apenas no AppModule (módulo raíz) — não é comum importá-lo diretamente dentro de um componente.
// OBS: aqui ele está importado mas NÃO está sendo usado nas 'imports' do @Component; se não for necessário, pode ser removido.
import { BrowserModule } from '@angular/platform-browser';


/*
  @Component define metadados do componente:
  - selector: tag HTML que representa esse componente (<app-root>).
  - imports: módulos/pipes/componentes usados por este componente.
      * Atenção importante: a propriedade `imports` funciona diretamente **apenas** se o componente for `standalone: true`.
        Se o componente NÃO for standalone, então esses módulos/pipes devem ser registrados no NgModule (ex.: app.module.ts).
  - templateUrl: arquivo HTML que contém o template deste componente.
  - styleUrl: caminho para o arquivo de estilos — o padrão do Angular costuma ser "styleUrls" (plural) com um array.
*/
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

// A classe do componente: aqui ficam as propriedades (dados) e os métodos (ações) que o template pode usar.
// Implementamos OnInit para executar código quando o componente for inicializado (ngOnInit).
export class App implements OnInit{
  // minhaData: armazenamos uma data em formato string ISO 8601 (com 'Z' no final -> indica UTC)
  // Exemplo: '2026-08-26T16:20:00.000Z' significa 26/08/2026 às 16:20 UTC (tempo universal).
  minhaData: string = '2026-08-26T16:20:00.000Z';

  // minhaDataObj: a mesma data, mas já convertida para um objeto Date do JavaScript.
  // Usar Date permite manipular horas, obter timestamp etc. `new Date(...)` interpreta a string ISO corretamente.
  minhaDataObj: Date = new Date('2026-08-26T16:20:00.000Z');

  // ngOnInit é executado quando o componente é inicializado.
  ngOnInit(){
    // Criamos um novo Date a partir da string e mostramos no console.
    // No console do navegador, o Date normalmente aparece convertido para o fuso horário local do usuário.
    console.log('Data convertida para região:', new Date(this.minhaData));

    // toUTCString() mostra a representação textual da data em UTC (sem conversão para fuso local).
    // Ex.: "Thu, 26 Aug 2026 16:20:00 GMT"
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString());
    
    // getTime() retorna o timestamp em milissegundos desde 1 Jan 1970 00:00:00 UTC.
    // Esse número é útil para armazenar datas como números ou para comparações/aritmética de tempo.
    console.log('Timestamp', new Date(this.minhaData).getTime());

    // Loga o objeto Date que já armazenamos em minhaDataObj.
    // Vai aparecer no console em fuso local do navegador.
    console.log(this.minhaDataObj);
  }
}

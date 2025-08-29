// Importações necessárias do Angular
import { CommonModule, DATE_PIPE_DEFAULT_OPTIONS, DatePipeConfig } from '@angular/common';
// CommonModule: fornece diretivas e pipes úteis, como *ngIf, *ngFor e o pipe 'date'
// DATE_PIPE_DEFAULT_OPTIONS e DatePipeConfig: permitem configurar padrões do pipe 'date'

import { Component, LOCALE_ID, OnInit } from '@angular/core';
// Component: transforma a classe em componente Angular
// LOCALE_ID: permite definir o idioma padrão da aplicação (pt-BR, en-US, etc)
// OnInit: interface para executar código no momento que o componente é iniciado

import { registerLocaleData } from '@angular/common';
// Função para registrar informações de localização (locale) no Angular
import localePt from '@angular/common/locales/pt';
// Importa as informações de data, hora e formatação do português do Brasil

// Registra o locale pt-BR no Angular, permitindo que pipes de data exibam nomes de meses/dias em português
registerLocaleData(localePt);

// Configuração padrão do pipe de data (DatePipe)
// Podemos definir formato e timezone padrão para todas as vezes que usarmos o pipe 'date'
const datePipeConfig: DatePipeConfig = {
  dateFormat: "'Data:' dd/MM/y", // Define o formato padrão (ex.: Data: 26/08/2026)
  timezone: '+0000', // Define que o horário padrão será UTC (sem conversão para fuso local)
}


@Component({
  selector: 'app-root', // Tag HTML que representa este componente: <app-root>
  imports: [CommonModule], // Módulos que este componente usa
  providers: [
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS, // Injetando configuração padrão do pipe 'date'
      useValue: datePipeConfig // Valor que define o padrão de formato e timezone
    },
    {
      provide: LOCALE_ID, // Injetando idioma padrão da aplicação
      useValue: 'pt-BR' // Define português do Brasil como idioma padrão
    }
  ],
  templateUrl: './app.html', // Arquivo HTML do componente
  styleUrl: './app.css' // Arquivo CSS do componente
})
export class App implements OnInit{
  // minhaData: data em formato string ISO 8601 com Z (UTC)
  minhaData: string = '2026-08-26T16:20:00.000Z';

  // minhaDataObj: mesmo instante, mas como objeto Date do JavaScript
  minhaDataObj: Date = new Date('2026-08-26T16:20:00.000Z');

  // ngOnInit: código que é executado assim que o componente é carregado
  ngOnInit(){
    // Mostra no console a data convertida para o fuso do navegador
    console.log('Data convertida para região:', new Date(this.minhaData));

    // Mostra a data em UTC (tempo universal)
    console.log('Data UTC-0:', new Date(this.minhaData).toUTCString());
    
    // Mostra o timestamp em milissegundos desde 1 Jan 1970
    console.log('Timestamp', new Date(this.minhaData).getTime());

    // Mostra o objeto Date que armazenamos
    console.log(this.minhaDataObj);
  }
}

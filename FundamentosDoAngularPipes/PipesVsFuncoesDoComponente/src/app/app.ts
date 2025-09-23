// CommonModule traz diretivas/pipes básicos usados nos templates (como *ngIf, *ngFor).
import { CommonModule } from '@angular/common';

// Component torna a classe abaixo num componente Angular reutilizável.
import { Component } from '@angular/core';

// RouterOutlet é a "janela" onde conteúdo de rotas-filhas é carregado (se você usar roteamento).
import { RouterOutlet } from '@angular/router';

// Importamos o pipe (se quisermos usar no template via `| status`).
import { StatusPipe } from './pipes/status.pipe';

@Component({
  selector: 'app-root', // Tag HTML que representa o componente: <app-root></app-root>
  // imports: lista módulos/declarações usados por este componente (funciona com componentes standalone).
  imports: [RouterOutlet, CommonModule, StatusPipe],
  templateUrl: './app.html', // arquivo HTML do template
  styleUrl: './app.scss'     // arquivo de estilos do componente (normalmente usa-se styleUrls: [...])
})
export class App {
  // Lista simples de usuários que vamos renderizar no template.
  // Cada item tem um nome e um código de status (1 = ativo, 2 = inativo).
  users = [
    { name: 'Jessica', status: 1 },
    { name: 'João',    status: 2 },
    { name: 'Laura',   status: 1 },
    { name: 'José',    status: 2 },
  ];

  // Método chamado pelo botão para marcar um usuário como inativo.
  // Recebe o índice do usuário no array e altera a propriedade status desse objeto.
  // Observação: isso muda (muta) o array/objeto existente — Angular atualiza a view porque
  // a propriedade usada no binding (user.status) mudou.
  inactivateUser(userIndex: number) {
    this.users[userIndex].status = 2;
  }

  // Adiciona um novo usuário ao final do array.
  // push() altera o array existente e o *ngFor detecta a mudança e adiciona o item na tela.
  addUser() {
    this.users.push({
      name: 'Julia',
      status: 1,
    });
  }

  // Método que converte o código numérico de status em texto legível.
  // IMPORTANTE: quando você chama essa função diretamente no template (ex.: {{ getUserStatus(user.status) }}),
  // ela será executada repetidas vezes — toda vez que o Angular rodar a detecção de mudanças.
  // O console.log aqui serve para vermos quantas vezes a função é chamada durante a detecção de mudanças.
  getUserStatus(userStatus: number): string {
    console.log('getUserStatus');

    // Mapa simples que converte 1 -> 'Ativo' e 2 -> 'Inativo'.
    const status: {[key:string]: string} = {
      1: 'Ativo',
      2: 'Inativo',
    };

    // Se userStatus não estiver no mapa, isso retorna undefined. Melhor retornar um fallback.
    return status[userStatus];
  }
}

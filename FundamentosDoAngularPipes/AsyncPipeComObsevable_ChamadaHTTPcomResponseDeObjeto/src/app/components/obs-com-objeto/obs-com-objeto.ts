// Imports essenciais do Angular e RxJS
import { Component, OnDestroy, OnInit } from '@angular/core';

// Serviço que criamos para buscar usuários
import { UsersService } from '../../services/users.service';

// Interface que descreve o objeto de usuário retornado pela API
import { IUserResponse } from '../../interfaces/user-response.interfaces';

// Observable e Subscription do RxJS:
// - Observable: tipo do fluxo de dados
// - Subscription: representa uma "assinatura" para podermos cancelar (unsubscribe)
import { Observable, Subscription } from 'rxjs';

// CommonModule para diretivas básicas no template (*ngIf, *ngFor)
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-obs-com-objeto',
  // imports: aqui você disponibiliza módulos/componentes para este componente
  imports: [CommonModule],
  templateUrl: './obs-com-objeto.html',
  styleUrl: './obs-com-objeto.scss'
})
export class ObsComObjeto implements OnInit, OnDestroy {
  // user: objeto que será preenchido quando usarmos o subscribe "manual".
  // Inicializamos como um cast vazio para satisfazer o TypeScript.
  user: IUserResponse = {} as IUserResponse;

  // userSubs: armazenamento da Subscription retornada por .subscribe()
  // Usamos isso para cancelar (unsubscribe) quando o componente for destruído.
  userSubs: Subscription | undefined;

  // user$: um Observable (fluxo) que a gente pode ligar diretamente ao template via async pipe.
  // O ponto de exclamação (!) indica ao TypeScript que a variável será inicializada (ainda que não aqui).
  user$!: Observable<IUserResponse>;

  // Injetamos o serviço de usuários no componente
  constructor(private readonly _usersService: UsersService) {}

  // ngOnInit: quando o componente entra na tela
  ngOnInit() {
    // 1) Exemplo de uso do Observable **sem fazer subscribe manualmente**.
    //    Atribuímos o Observable à propriedade user$ — no template vamos usar (user$ | async).
    //    O async pipe se inscreve automaticamente e cancela a inscrição quando o template some.
    this.user$ = this._usersService.getUserById(2);

    // 2) Exemplo de subscribe manual:
    //    Aqui fazemos a requisição e assinamos o resultado para popular a variável user.
    //    Ao final precisamos fazer unsubscribe (ou confiar que o Observable completa).
    this.userSubs = this._usersService.getUserById(1).subscribe((userResponse) => {
      // Quando a resposta chegar, armazenamos no this.user para ser usada no template.
      this.user = userResponse;
    });
  }

  // ngOnDestroy: executado quando o componente é removido da tela (navegação / fechamento)
  ngOnDestroy() {
    // Se existir uma assinatura manual, cancelamos para evitar vazamento de memória.
    // Observação: no caso do HttpClient, o Observable normalmente emite um valor e completa,
    // então o unsubscribe não é estritamente necessário — mas é uma boa prática quando
    // você não tem certeza se a fonte completa (ex.: WebSocket, interval, subjects).
    this.userSubs && this.userSubs.unsubscribe();
  }

  // Método chamado ao clicar nos botões no template.
  // Ele altera user$ para um novo Observable retornado pelo serviço,
  // assim o async pipe no template fará a nova requisição e mostrará o novo usuário.
  onBtnClick(userId: number) {
    this.user$ = this._usersService.getUserById(userId)
  }
}

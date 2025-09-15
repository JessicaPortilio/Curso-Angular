import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersService } from './services/users.service';
import { IUser } from './interfaces/user.interface';
import { IUserResponse } from './interfaces/user-response.interfaces';
import { lastValueFrom } from 'rxjs';
// lastValueFrom: função que converte um Observable (que completa) em Promise.
// IMPORTANTE: só usar quando você tem certeza que o Observable completará (como um GET HTTP).

@Component({
  selector: 'app-root',           // tag HTML do componente: <app-root>
  imports: [CommonModule], // módulos usados no template
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  // userPromise guardará a Promise retornada por getUser()
  userPromise: Promise<IUser> | undefined;

  // userByIdPromise guardará a Promise resultante de converter o Observable (getUserById) via lastValueFrom
  userByIdPromise: Promise<IUserResponse> | undefined;

  constructor( private readonly _usersService: UsersService ) {}

  ngOnInit() {
    // 1) Atribui a Promise retornada pelo serviço (simulada com setTimeout)
    //    - Essa Promise resolve em 3s com um objeto IUser.
    //    - Podemos ligar essa Promise ao template com (userPromise | async)
    this.userPromise = this._usersService.getUser();

    // 2) Converte o Observable do HttpClient em Promise com lastValueFrom
    //    - O HttpClient retorna um Observable que emite um valor e COMPLETA.
    //    - lastValueFrom(Observable) retorna uma Promise que resolve com o último valor emitido.
    //    - Útil quando você prefere trabalhar com async/await ou usar (promise | async) no template.
    this.userByIdPromise = lastValueFrom(this._usersService.getUserById(5));
    // OBS: se o Observable não completasse, lastValueFrom ficaria pendente (não resolve).

    // 3) Exemplo de consumo "manual" da Promise (apenas para demonstração)
    this._usersService.getUser().then(user => {
      console.log('User ->', user);
      // Aqui apenas logamos no console quando a Promise resolve.
    });
  }
}

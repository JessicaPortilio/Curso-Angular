import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../app/services/users.service'; // Importa o serviço que busca os dados.
import { Observable } from 'rxjs'; // Tipo usado para representar os dados que chegam depois (da API).
import { UserListResponse } from '../../app/types/users-list-response.type'; // Tipo que representa uma lista de usuários.
import { CommonModule } from '@angular/common'; // Necessário para usar diretivas como *ngFor no HTML.

// Decorador que transforma a classe em um componente Angular
@Component({
  selector: 'app-obs-com-array', // Nome da tag que usaremos no HTML
  imports: [CommonModule], // Importa funcionalidades básicas (como *ngFor e *ngIf).
  templateUrl: './obs-com-array.html', // Arquivo HTML associado
  styleUrl: './obs-com-array.scss' // Estilos (CSS/SCSS) do componente
})
export class ObsComArray implements OnInit {
  // user$ é um Observable que vai receber a lista de usuários
  user$!: Observable<UserListResponse>;
  
  constructor(
    private readonly _userService: UsersService // Injeção do serviço para buscar os dados
  ) {}

  // ngOnInit é chamado automaticamente quando o componente é carregado
  ngOnInit() {
    // Aqui chamamos o serviço para buscar os usuários da API
    this.user$ = this._userService.getUsers();
  }
}

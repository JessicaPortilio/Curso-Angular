// Importa funcionalidades do Angular para criar componentes.
import { Component, EventEmitter, Output } from '@angular/core';
// Importa o módulo de Angular Material para design.
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
// Importa a interface que define como os dados dos usuários são estruturados.
import { IUser } from '../../interfaces/user/user.interface';
// Importa uma lista fictícia de usuários para exibição.
import { UsersList } from '../../data/users-list';
import { PipesModule } from '../../pipes/pipes.module';
import { CommonModule } from '@angular/common';

@Component({
  // Define o seletor que será usado no HTML para exibir este componente.
  selector: 'app-users-list',

  // Importa os módulos e dependências usadas neste componente.
  imports: [AngularMaterialModule, PipesModule, CommonModule],

  // Define o arquivo HTML que contém a estrutura visual do componente.
  templateUrl: './users-list.component.html',

  // Define o arquivo de estilos (CSS ou SCSS) usado neste componente.
  styleUrl: './users-list.component.scss'
})
// Classe que contém a lógica do componente.
export class UsersListComponent {
  // Lista de usuários que será exibida na tabela.
  userList: IUser[] = UsersList;

  // Define as colunas que serão exibidas na tabela.
  displayedColumns: string[] = ['name', 'date', 'status'];

  // Define um evento que será disparado quando um usuário for selecionado.
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  // Função que será chamada quando um usuário for selecionado na tabela.
  onUserSelected(user: IUser) {
    // Exibe os detalhes do usuário no console.
    console.log(user);
    // Dispara o evento com os dados do usuário selecionado.
    this.userSelectedEmitt.emit(user);
  }
}

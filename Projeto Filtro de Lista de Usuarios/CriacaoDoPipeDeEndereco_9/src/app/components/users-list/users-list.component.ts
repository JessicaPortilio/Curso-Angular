// Importa funcionalidades do Angular para criar componentes.
import { Component } from '@angular/core';
// Importa o módulo de Angular Material para design.
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
// Importa a interface que define como os dados dos usuários são estruturados.
import { IUser } from '../../interfaces/user/user.interface';
// Importa uma lista fictícia de usuários para exibição.
import { UsersList } from '../../data/users-list';

@Component({
  // Define o seletor que será usado no HTML para exibir este componente.
  selector: 'app-users-list',

  // Importa os módulos e dependências usadas neste componente.
  imports: [AngularMaterialModule],

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

  // Função que será chamada quando um usuário for selecionado.
  onUserSelected(user: IUser) {
    // Exibe os detalhes do usuário no console.
    console.log(user);
  }
}

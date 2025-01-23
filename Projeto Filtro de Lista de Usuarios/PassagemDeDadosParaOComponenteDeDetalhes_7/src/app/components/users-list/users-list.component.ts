// Componente Angular que exibe a lista de usuários.
import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module'; // Importa o módulo Angular Material.
import { IUser } from '../../interfaces/user/user.interface'; // Interface que define o formato de um usuário.
import { UsersList } from '../../data/users-list'; // Dados fictícios de usuários.

@Component({
  selector: 'app-users-list',             // Nome do seletor do componente.
  imports: [AngularMaterialModule],       // Importa o módulo Angular Material.
  templateUrl: './users-list.component.html', // Define o arquivo HTML do componente.
  styleUrl: './users-list.component.scss' // Define o arquivo de estilos SCSS do componente.
})
// Classe que gerencia a lógica do componente.
export class UsersListComponent {
  userList: IUser[] = UsersList;             // Lista de usuários a ser exibida na tabela.
  displayedColumns: string[] = ['name', 'date', 'status']; // Colunas a serem exibidas na tabela.
  
  // Método chamado ao clicar em um usuário na tabela.
  onUserSelected(user : IUser) {
    console.log(user); // Exibe os detalhes do usuário selecionado no console.
  }
}

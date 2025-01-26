// Importa funcionalidades básicas do Angular para criar componentes e gerenciar eventos.
import { Component, EventEmitter, Input, Output } from '@angular/core';

// Importa o módulo Angular Material para utilizar elementos visuais estilizados como tabelas e botões.
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

// Importa a interface `IUser`, que serve para definir o formato dos dados de usuário.
import { IUser } from '../../interfaces/user/user.interface';

// Importa os pipes personalizados que serão utilizados no componente.
import { PipesModule } from '../../pipes/pipes.module';

// Importa funcionalidades básicas para trabalhar com templates no Angular.
import { CommonModule } from '@angular/common';

// Define o componente, incluindo como ele será chamado no HTML, o design e o estilo.
@Component({
  selector: 'app-users-list', // Nome usado no HTML para incluir este componente.
  imports: [AngularMaterialModule, PipesModule, CommonModule], // Define os módulos utilizados neste componente.
  templateUrl: './users-list.component.html', // Caminho para o arquivo HTML que descreve a aparência do componente.
  styleUrl: './users-list.component.scss' // Caminho para o arquivo de estilos (CSS/SCSS) aplicado ao componente.
})
// Define a classe que contém toda a lógica do componente.
export class UsersListComponent {
  // Lista de nomes de colunas que serão exibidas na tabela (como nome, data e status).
  displayedColumns: string[] = ['name', 'date', 'status'];

  // Recebe uma lista de usuários que será exibida na tela. É obrigatório passar essa lista para o componente.
  @Input({required: true}) userList: IUser[] = [];

  // Cria um evento que será disparado quando o usuário clicar em um item da tabela.
  @Output('userSelected') userSelectedEmitt = new EventEmitter<IUser>();

  // Função que é chamada quando um usuário da lista é selecionado.
  onUserSelected(user: IUser) {
    console.log(user); // Mostra as informações do usuário no console (para desenvolvedores).
    this.userSelectedEmitt.emit(user); // Dispara o evento passando o usuário selecionado como parâmetro.
  }
}

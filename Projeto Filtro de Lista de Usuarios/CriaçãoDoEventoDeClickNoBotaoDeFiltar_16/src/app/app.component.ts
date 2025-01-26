// Importa funcionalidades básicas do Angular para criar componentes e inicializar dados.
import { Component, OnInit } from '@angular/core';

// Importa recursos do Angular para trabalhar com diretivas como *ngIf e *ngFor.
import { CommonModule } from '@angular/common';

// Importa o módulo que contém os componentes personalizados da aplicação.
import { ComponentsModule } from './components/components.module';

// Importa a interface `IUser`, que define o formato dos dados de usuários.
import { IUser } from './interfaces/user/user.interface';

// Importa uma lista simulada de usuários para exibição inicial.
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

// Define o componente principal da aplicação.
@Component({
  selector: 'app-root', // Nome usado no HTML para renderizar este componente.
  imports: [CommonModule, ComponentsModule], // Declara os módulos que serão utilizados.
  templateUrl: './app.component.html', // Caminho para o HTML que descreve o layout principal.
  styleUrl: './app.component.scss' // Caminho para o arquivo de estilos CSS/SCSS.
})
// Classe principal que define o comportamento do componente raiz.
export class AppComponent implements OnInit {
  // Cria uma lista de usuários que será exibida na tela.
  userList: IUser[] = [];

  // Cria uma variável que armazena o usuário atualmente selecionado.
  userSelected: IUser = {} as IUser;

  // Define se os detalhes do usuário selecionado serão exibidos ou não.
  showUserDetails: boolean = false;

  // Função executada automaticamente quando o componente é carregado.
  ngOnInit() {
    setTimeout(() => {
      // Simula a busca de usuários, exibindo a lista após 3 segundos.
      this.userList = UsersList;
    }, 1); // Aguarda 3 segundos antes de carregar os dados.
  }

  // Função chamada quando um usuário da lista é selecionado.
  onUserSelected(user: IUser) {
    this.userSelected = user; // Salva o usuário selecionado.
    this.showUserDetails = true; // Exibe os detalhes do usuário na tela.
  }

// Função chamada quando os filtros são aplicados.
  onFilter(filterOptions: IFilterOptions) {
    // Imprime os valores do filtro no console para depuração.
    console.log(filterOptions);
    
  }
}

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

// Importa uma interface que define as opções possíveis para os filtros de busca (nome, datas, status, etc.).
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

  // Cria outra lista para armazenar os usuários filtrados com base nos filtros aplicados.
  userListFiltered: IUser[] = []

  // Cria uma variável que armazena o usuário atualmente selecionado.
  userSelected: IUser = {} as IUser;

  // Define se os detalhes do usuário selecionado serão exibidos ou não.
  showUserDetails: boolean = false;

  // Função executada automaticamente quando o componente é carregado.
  ngOnInit() {
    setTimeout(() => {
      // Simula a busca de usuários, exibindo a lista após 3 segundos.
      this.userList = UsersList;

       // Inicializa a lista filtrada com todos os usuários, já que inicialmente não há filtros aplicados.
      this.userListFiltered = this.userList
      
    }, 1); // Define o intervalo para 1 milissegundo, carregando quase instantaneamente.
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
    // Atualiza a lista filtrada com os usuários que correspondem aos critérios de filtro.
    this.userListFiltered = this.filterUserList(filterOptions, this.userList);
    
  }

  // Função auxiliar que recebe os filtros e a lista original e retorna a lista de usuários filtrados.
  filterUserList(filterOptions: IFilterOptions, userList: IUser[]): IUser[] {
    // Inicializa a variável que armazenará os usuários filtrados.
    let filteredList: IUser[] = [];

    // Aplica o filtro por nome chamando uma função dedicada a esse propósito.
    filteredList = filterUsersListByName(filterOptions.name, userList);

    // Retorna a lista final de usuários filtrados.
    return filteredList;
  }
}


// Função externa que aplica o filtro por nome aos usuários.
function filterUsersListByName(name: string | undefined, userList: IUser[]): IUser[] {
  // Verifica se nenhum nome foi digitado no campo de busca.
  const NAME_NOT_TYPED = name === undefined;

  // Se nenhum nome foi digitado, retorna a lista completa de usuários, sem filtrar.
  if (NAME_NOT_TYPED) {
    return userList;
  }

  // Se um nome foi digitado, filtra a lista de usuários, retornando apenas aqueles cujo nome contém o texto buscado.
  const filteredList = userList.filter((user) =>
    user.nome.toLowerCase().includes(name.toLowerCase()) // Converte os nomes para letras minúsculas para fazer uma busca sem diferenciação entre maiúsculas e minúsculas.
  );

  // Retorna a lista filtrada.
  return filteredList;
}


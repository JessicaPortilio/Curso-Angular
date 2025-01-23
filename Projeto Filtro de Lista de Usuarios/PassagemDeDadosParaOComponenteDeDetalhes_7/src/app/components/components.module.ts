// Importa a classe NgModule do Angular, para definir outro módulo.
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms'; // Permite trabalhar com formulários.
import { CommonModule } from "@angular/common"; // Disponibiliza funcionalidades comuns do Angular.
import { FilterComponent } from "./filter/filter.component"; // Importa o componente de filtro personalizado.
import { UserDetailsComponent } from "./user-details/user-details.component"; // Importa o componente para exibir detalhes do usuário.
import { AngularMaterialModule } from "../angular-material/angular-material.module"; // Importa o módulo do Angular Material criado anteriormente.
import { UsersListComponent } from "./users-list/users-list.component"; // Importa o componente para exibir a lista de usuários.




// Define um módulo chamado ComponentsModule
@NgModule({
    declarations: [
        // Aqui você listaria os componentes que pertencem a este módulo.
    ],
    imports: [
        // Importa o módulo AngularMaterialModule, que contém os módulos de Angular Material.
        FormsModule,             // Permite lidar com formulários reativos.
        CommonModule,            // Disponibiliza funcionalidades comuns do Angular.
        FilterComponent,         // Componente para filtrar usuários.
        UsersListComponent,      // Componente para exibir a lista de usuários.
        UserDetailsComponent,    // Componente para exibir os detalhes do usuário.
        AngularMaterialModule    // Importa o módulo Angular Material para estilizar os componentes.
        
        // Importa o módulo `AngularMaterialModule` para que os componentes neste módulo tenham acesso aos recursos do Angular Material.
    ],
    exports:[
        // Aqui você lista os componentes que quer disponibilizar para outros módulos.
        FormsModule,             // Exporta funcionalidades de formulários.
        CommonModule,            // Exporta funcionalidades comuns do Angular.
        FilterComponent,         // Exporta o componente de filtro.
        UsersListComponent,      // Exporta o componente de lista de usuários.
        UserDetailsComponent     // Exporta o componente de detalhes do usuário.
        
        
        // Aqui você listaria os componentes que deseja disponibilizar para outros módulos.
        
    ],
})
export class ComponentsModule {}
// Cria e exporta o módulo `ComponentsModule`, usado para organizar e agrupar componentes que podem ser reutilizados em outros lugares.

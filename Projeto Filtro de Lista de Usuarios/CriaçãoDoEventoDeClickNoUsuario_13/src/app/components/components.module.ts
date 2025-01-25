// Importa funcionalidades para criar módulos no Angular.
import { NgModule } from "@angular/core";
// Importa módulo para trabalhar com formulários no Angular.
import { FormsModule } from '@angular/forms';
// Importa funcionalidades comuns, como diretivas e pipes.
import { CommonModule } from "@angular/common";
// Importa o componente que será usado para criar filtros.
import { FilterComponent } from "./filter/filter.component";
// Importa o componente que exibe detalhes dos usuários.
import { UserDetailsComponent } from "./user-details/user-details.component";
// Importa um módulo criado para Angular Material (design).
import { AngularMaterialModule } from "../angular-material/angular-material.module";
// Importa o componente que exibe a lista de usuários.
import { UsersListComponent } from "./users-list/users-list.component";
// Importa o módulo de pipes para reuso.
import { PipesModule } from "../pipes/pipes.module";

// Define o módulo `ComponentsModule`.
@NgModule({
    // Declara os componentes pertencentes a este módulo.
    declarations: [],

    // Importa os módulos e componentes que serão usados neste módulo.
    imports: [
        PipesModule,              // Módulo com pipes personalizados.
        FormsModule,              // Módulo para trabalhar com formulários.
        CommonModule,             // Funcionalidades comuns do Angular.
        FilterComponent,          // Componente de filtro.
        UsersListComponent,       // Componente de lista de usuários.
        UserDetailsComponent,     // Componente de detalhes de usuários.
        AngularMaterialModule      // Módulo de Angular Material.
    ],

    // Exporta os módulos e componentes para que outros módulos possam usá-los.
    exports: [
        PipesModule,              // Exporta o módulo de pipes.
        FormsModule,              // Exporta o módulo de formulários.
        CommonModule,             // Exporta funcionalidades comuns.
        FilterComponent,          // Exporta o componente de filtro.
        UsersListComponent,       // Exporta o componente de lista de usuários.
        UserDetailsComponent      // Exporta o componente de detalhes de usuários.
    ],
})
// Exporta o módulo `ComponentsModule` para que outros módulos possam utilizá-lo.
export class ComponentsModule {}

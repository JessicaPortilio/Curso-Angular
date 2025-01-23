// Importa a classe NgModule do Angular, para definir outro módulo.
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter/filter.component";
// Importa o componente UserDetailsComponent, que é o componente que vai exibir detalhes do usuário.
import { UserDetailsComponent } from "./user-details/user-details.component";
// Importa o módulo AngularMaterialModule que você criou anteriormente para utilizar seus recursos.
import { AngularMaterialModule } from "../angular-material/angular-material.module";




// Define um módulo chamado ComponentsModule
@NgModule({
    declarations: [
        // Aqui você listaria os componentes que pertencem a este módulo.
    ],
    imports: [
        // Importa o módulo AngularMaterialModule, que contém os módulos de Angular Material.
        FormsModule,
        CommonModule,
        FilterComponent,
        UserDetailsComponent,  // Importa o componente de detalhes do usuário.
        AngularMaterialModule, 
        
        
        
        // Importa o módulo `AngularMaterialModule` para que os componentes neste módulo tenham acesso aos recursos do Angular Material.
    ],
    exports:[
        // Aqui você lista os componentes que quer disponibilizar para outros módulos.
        FormsModule,
        CommonModule,
        FilterComponent,
        UserDetailsComponent,  // Exporta o componente de detalhes do usuário.
        
        
        // Aqui você listaria os componentes que deseja disponibilizar para outros módulos.
        
    ],
})
export class ComponentsModule {}
// Cria e exporta o módulo `ComponentsModule`, usado para organizar e agrupar componentes que podem ser reutilizados em outros lugares.

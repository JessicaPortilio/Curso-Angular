import { NgModule } from "@angular/core";
// Importa a classe `NgModule` do Angular.

import { AngularMaterialModule } from "../angular-material/angular-material.module";
// Importa o módulo `AngularMaterialModule` criado anteriormente para usar seus recursos.

@NgModule({
    declarations: [
        // Aqui você listaria os componentes que pertencem a este módulo.
    ],
    imports: [
        AngularMaterialModule
        // Importa o módulo `AngularMaterialModule` para que os componentes neste módulo tenham acesso aos recursos do Angular Material.
    ],
    exports:[
        // Aqui você listaria os componentes que deseja disponibilizar para outros módulos.
    ],
})
export class ComponentsModule {}
// Cria e exporta o módulo `ComponentsModule`, usado para organizar e agrupar componentes que podem ser reutilizados em outros lugares.

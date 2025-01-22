// Importa o módulo NgModule, que permite criar módulos no Angular.
import { NgModule } from "@angular/core";
// Importa o módulo MatListModule do Angular Material, que oferece componentes de listas.
import { MatListModule } from '@angular/material/list';
// Importa o módulo MatDividerModule do Angular Material, que permite adicionar divisores em listas.
import { MatDividerModule } from '@angular/material/divider';
// Importa o módulo MatButtonModule do Angular Material, que fornece botões.
import { MatButtonModule } from '@angular/material/button';



// Importa a classe `NgModule` do Angular, que é usada para criar módulos.

@NgModule({
    // A lista abaixo indica os módulos que você está importando para dentro do seu módulo.
    imports: [
        MatListModule,      // Módulo de listas do Angular Material
        MatDividerModule,   // Módulo de divisores do Angular Material
        MatButtonModule,    // Módulo de botões do Angular Material
        // Aqui você listaria os módulos do Angular Material que deseja usar neste módulo.
    ],
    // A lista abaixo indica os módulos que você quer tornar disponíveis para outros módulos.
    exports: [
        MatListModule,      // Exporta o módulo de listas
        MatDividerModule,   // Exporta o módulo de divisores
        MatButtonModule,    // Exporta o módulo de botões
        // Aqui você listaria os módulos do Angular Material que deseja exportar para outros módulos.
    ],
})
export class AngularMaterialModule {}
// Cria e exporta o módulo `AngularMaterialModule`, que será usado para agrupar e organizar os módulos do Angular Material.

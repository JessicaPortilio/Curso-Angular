// Importa o módulo NgModule, que permite criar módulos no Angular.
import { NgModule } from "@angular/core";

// Importa o módulo MatListModule do Angular Material, que oferece componentes de listas.
import { MatListModule } from '@angular/material/list';

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

// Importa o módulo MatButtonModule do Angular Material, que fornece botões.
import { MatButtonModule } from '@angular/material/button';

import { MatNativeDateModule } from "@angular/material/core";

// Importa o módulo MatDividerModule do Angular Material, que permite adicionar divisores em listas.
import { MatDividerModule } from '@angular/material/divider';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatDatepickerModule } from '@angular/material/datepicker';








// Importa a classe `NgModule` do Angular, que é usada para criar módulos.

@NgModule({
    // A lista abaixo indica os módulos que você está importando para dentro do seu módulo.
    imports: [
        MatListModule,      // Módulo de listas do Angular Material
        MatInputModule,
        MatButtonModule,    // Módulo de botões do Angular Material
        MatDividerModule,   // Módulo de divisores do Angular Material
        MatSelectModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        
        
        // Aqui você listaria os módulos do Angular Material que deseja usar neste módulo.
    ],
    // A lista abaixo indica os módulos que você quer tornar disponíveis para outros módulos.
    exports: [
        MatListModule,      // Exporta o módulo de listas
        MatInputModule,
        MatSelectModule,
        MatButtonModule,    // Exporta o módulo de botões
        MatDividerModule,   // Exporta o módulo de divisores
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        
        // Aqui você listaria os módulos do Angular Material que deseja exportar para outros módulos.
    ],
})
export class AngularMaterialModule {}
// Cria e exporta o módulo `AngularMaterialModule`, que será usado para agrupar e organizar os módulos do Angular Material.

// Importa o decorador NgModule do Angular, que é usado para criar e organizar módulos.
import { NgModule } from "@angular/core";

// Importa os módulos do Angular Material, que fornecem componentes prontos, como listas, botões, tabelas, etc.
import { MatListModule } from '@angular/material/list'; // Componente para criar listas.
import { MatInputModule } from '@angular/material/input'; // Componente para campos de entrada de dados.
import { MatTableModule } from '@angular/material/table'; // Componente para criar tabelas.
import { MatSelectModule } from '@angular/material/select'; // Componente para criar dropdowns (menus de seleção).
import { MatButtonModule } from '@angular/material/button'; // Componente para criar botões.
import { MatNativeDateModule } from "@angular/material/core"; // Componente para trabalhar com datas nativas do Angular.
import { MatDividerModule } from '@angular/material/divider'; // Componente para criar divisores visuais entre elementos.
import { MatFormFieldModule } from '@angular/material/form-field'; // Componente para campos de formulário com estilização.
import { MatDatepickerModule } from '@angular/material/datepicker'; // Componente para seleção de datas.


// Importa a classe `NgModule` do Angular, que é usada para criar módulos.

@NgModule({
    // A lista abaixo indica os módulos que você está importando para dentro do seu módulo.
    imports: [
        MatListModule,      // Permite criar listas estilizadas.
        MatInputModule,     // Permite criar campos de entrada de dados.
        MatTableModule,     // Permite criar tabelas.
        MatButtonModule,    // Permite criar botões.
        MatDividerModule,   // Permite criar divisores visuais.
        MatSelectModule,    // Permite criar dropdowns.
        MatFormFieldModule, // Permite criar campos de formulário estilizados.
        MatDatepickerModule,// Permite criar seletores de datas.
        MatNativeDateModule // Oferece suporte para datas nativas.
        
        
        // Aqui você listaria os módulos do Angular Material que deseja usar neste módulo.
    ],
    // A lista abaixo indica os módulos que você quer tornar disponíveis para outros módulos.
    exports: [
        MatListModule,      // Disponibiliza listas estilizadas.
        MatInputModule,     // Disponibiliza campos de entrada de dados.
        MatTableModule,     // Disponibiliza tabelas.
        MatButtonModule,    // Disponibiliza botões.
        MatDividerModule,   // Disponibiliza divisores visuais.
        MatSelectModule,    // Disponibiliza dropdowns.
        MatFormFieldModule, // Disponibiliza campos de formulário estilizados.
        MatDatepickerModule,// Disponibiliza seletores de datas.
        MatNativeDateModule // Disponibiliza suporte para datas nativas.
        
        // Aqui você listaria os módulos do Angular Material que deseja exportar para outros módulos.
    ],
})
export class AngularMaterialModule {}
// Cria e exporta o módulo `AngularMaterialModule`, que será usado para agrupar e organizar os módulos do Angular Material.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para diretivas e pipes comuns do Angular
import { CardComponent } from '../card/card.component'; // Componente standalone
import { CardButtonComponent } from '../card-button/card-button.component'; // Componente standalone
import { CardRoxoComponent } from '../card-roxo/card-roxo.component'; // Componente standalone
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component'; // Componente standalone

@NgModule({
  imports: [
    CommonModule, // Módulo para usar diretivas como *ngIf, *ngFor, etc.
    CardComponent, // Importando standalone components
    CardButtonComponent,
    CardRoxoComponent,
    CardRoxoButtonComponent,
  ],
  exports: [
    CardComponent, // Exportando para que outros módulos possam usá-los
    //CardButtonComponent,
    CardRoxoComponent,
    //CardRoxoButtonComponent
  ]
})
export class CardsModule {}

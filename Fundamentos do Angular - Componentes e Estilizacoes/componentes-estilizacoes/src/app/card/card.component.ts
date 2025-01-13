import { Component, ViewEncapsulation } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";
import { CardButtonCancelComponent } from "../card-button-cancel/card-button-cancel.component";
import { MatSliderModule } from '@angular/material/slider';

interface IPlano {
  infos: Infos;
}

interface Infos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  imports: [CardButtonComponent, CardButtonCancelComponent, MatSliderModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  // encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  //@ts-ignore
  plano:IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 100,
    } 
  };
}

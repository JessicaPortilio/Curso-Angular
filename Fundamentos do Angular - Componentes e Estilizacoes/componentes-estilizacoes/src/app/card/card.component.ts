import { Component } from '@angular/core';
import { CardButtonComponent } from "../card-button/card-button.component";
import { CardButtonCancelComponent } from "../card-button-cancel/card-button-cancel.component";

interface IPlano {
  infos: Infos;
}

interface Infos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  imports: [CardButtonComponent, CardButtonCancelComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
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

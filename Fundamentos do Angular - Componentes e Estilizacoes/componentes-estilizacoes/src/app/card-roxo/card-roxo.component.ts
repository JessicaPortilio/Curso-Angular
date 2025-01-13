import { Component } from '@angular/core';
import { CardRoxoButtonComponent } from "../card-roxo-button/card-roxo-button.component";
import { CardButtonCancelComponent } from "../card-button-cancel/card-button-cancel.component";
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-card-roxo',
  imports: [CardRoxoButtonComponent, CardButtonCancelComponent, MatSliderModule],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {

}

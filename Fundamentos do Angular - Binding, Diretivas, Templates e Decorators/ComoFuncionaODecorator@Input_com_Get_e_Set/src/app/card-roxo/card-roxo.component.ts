import { Component } from '@angular/core';
import { CardRoxoButtonComponent } from "../card-roxo-button/card-roxo-button.component";
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-card-roxo',
  imports: [CardRoxoButtonComponent, MatSliderModule],
  templateUrl: './card-roxo.component.html',
  styleUrl: './card-roxo.component.scss'
})
export class CardRoxoComponent {

}

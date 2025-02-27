import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardLineComponent } from "../card-line/card-line.component";
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: 'app-balance-card',
  imports: [CardItemComponent, CardLineComponent, CardTitleComponent],
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {

}

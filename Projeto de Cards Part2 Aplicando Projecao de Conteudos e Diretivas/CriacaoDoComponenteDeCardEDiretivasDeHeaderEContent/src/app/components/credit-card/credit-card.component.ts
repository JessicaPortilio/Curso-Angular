import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardLineComponent } from "../card-line/card-line.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardComponent } from "../card/card.component";
import { CardHeaderDirective } from "../card/directives/card-header.directive";
import { CardContentDirective } from "../card/directives/card-content.directive";

@Component({
  selector: 'app-credit-card',
  imports: [CardItemComponent, CardLineComponent, CardTitleComponent, CardComponent, CardHeaderDirective, CardContentDirective],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {

}

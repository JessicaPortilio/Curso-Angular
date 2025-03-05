import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardLineComponent } from "../card-line/card-line.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardComponent } from "../card/card.component";
import { CardHeaderDirective } from "../card/directives/base/card-header.directive";
import { CardContentDirective } from "../card/directives/base/card-content.directive";
import { CardDescriptionTextDirective } from '../card/directives/texts/card-description-text.directive';


@Component({
  selector: 'app-credit-card',
  imports: [CardItemComponent, CardLineComponent, CardTitleComponent, CardComponent, CardHeaderDirective, CardContentDirective, CardDescriptionTextDirective],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {

}

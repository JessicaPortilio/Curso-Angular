import { Component } from '@angular/core';
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardComponent } from "../card/card.component";
import { CardHeaderDirective } from "../card/directives/base/card-header.directive";
import { CardContentDirective } from "../card/directives/base/card-content.directive";

@Component({
  selector: 'app-debit-card',
  imports: [CardTitleComponent, CardComponent, CardHeaderDirective, CardContentDirective],
  templateUrl: './debit-card.component.html',
  styleUrl: './debit-card.component.scss'
})
export class DebitCardComponent {

}

import { Component, Input } from '@angular/core';
import { CardTitleTextDirective } from '../card/directives/texts/card-title-text.directive';
import { CardMediumIconDirective } from '../card/directives/icons/card-medium-icon.directive';
import { CardLargeIconDirective } from '../card/directives/icons/card-large-icon.directive';

@Component({
  selector: 'app-card-title',
  imports: [CardTitleTextDirective, CardMediumIconDirective, CardLargeIconDirective],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) icon: string = '';
}

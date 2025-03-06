import { Component, Input } from '@angular/core';
import { CardDescriptionTextDirective } from '../card/directives/texts/card-description-text.directive';

@Component({
  selector: 'app-card-item',
  imports: [CardDescriptionTextDirective],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input({ required: true }) text: string = '';
  @Input({ required: true }) value: string = '';
}

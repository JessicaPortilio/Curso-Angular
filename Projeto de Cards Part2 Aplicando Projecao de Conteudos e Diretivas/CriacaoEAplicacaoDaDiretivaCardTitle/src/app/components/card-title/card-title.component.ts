import { Component, Input } from '@angular/core';
import { CardTitleTextDirective } from '../card/directives/texts/card-title-text.directive';

@Component({
  selector: 'app-card-title',
  imports: [CardTitleTextDirective],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) icon: string = '';
}

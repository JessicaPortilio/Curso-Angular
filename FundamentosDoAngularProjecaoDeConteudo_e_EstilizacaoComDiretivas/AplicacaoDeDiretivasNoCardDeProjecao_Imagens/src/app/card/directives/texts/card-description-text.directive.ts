import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Card-Description-Text, [appCardDescriptionText]',
  host: {'class': 'ca-c-card__description-text'}
})
export class CardDescriptionTextDirective {}

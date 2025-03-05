import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Card-Sub-Text, [appCardSubText]',
  host: {'class': 'ca-c-card__sub-text'}
})
export class CardSubTextDirective {}

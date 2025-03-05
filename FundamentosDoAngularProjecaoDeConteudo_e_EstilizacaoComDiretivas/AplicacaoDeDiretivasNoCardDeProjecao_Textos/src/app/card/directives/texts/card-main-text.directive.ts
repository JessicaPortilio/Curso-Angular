import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Card-Main-Text , [appCardMainText]',
  host: {'class': 'ca-c-card__main-text'}
})
export class CardMainTextDirective {}

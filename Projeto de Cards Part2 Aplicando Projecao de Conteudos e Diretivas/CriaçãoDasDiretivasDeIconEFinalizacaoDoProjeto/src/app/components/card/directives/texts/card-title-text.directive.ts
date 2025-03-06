// ng g directive card-title-text --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-title-text, [appCardTitleText]',
  host: {'class': 'ca-c-card__title-text'}
})
export class CardTitleTextDirective {}

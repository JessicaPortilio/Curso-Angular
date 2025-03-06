// ng g directive card-medium-icon --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardMediumIcon]',
  host: {'class': 'ca-c-card__medium-icon'}
})
export class CardMediumIconDirective {}

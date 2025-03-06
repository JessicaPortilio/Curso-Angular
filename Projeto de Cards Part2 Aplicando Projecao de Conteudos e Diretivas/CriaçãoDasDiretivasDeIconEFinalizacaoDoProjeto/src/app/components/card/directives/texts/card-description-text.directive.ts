// ng g directive card-description-text --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-description-text, [appCardDescriptionText]',
  host: {'class': 'ca-c-card__description-text'}
})
export class CardDescriptionTextDirective {}

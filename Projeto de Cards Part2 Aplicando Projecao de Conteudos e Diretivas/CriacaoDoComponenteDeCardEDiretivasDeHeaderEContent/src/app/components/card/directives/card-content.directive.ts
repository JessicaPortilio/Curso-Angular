// ng g directive card-content --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]',
  host: {'class': 'ca-c-card__content'}
})
export class CardContentDirective {}

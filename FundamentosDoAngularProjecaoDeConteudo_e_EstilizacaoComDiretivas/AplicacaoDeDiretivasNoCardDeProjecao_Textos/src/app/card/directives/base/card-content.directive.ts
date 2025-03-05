// ng g directive card-content --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Card-Content , [appCardContent]',
  host:{'class': 'ca-c-card__content'}
})
export class CardContentDirective {}

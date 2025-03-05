// ng g directive card-header --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-Card-Header, [appCardHeader]',
  host: {'class': 'ca-c-card__header'}
})
export class CardHeaderDirective {}

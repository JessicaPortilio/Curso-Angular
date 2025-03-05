// ng g directive card-header --skip-tests=true
import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-header, [appCardHeader]',
  host: {'class': 'ca-c-card__header'}
})
export class CardHeaderDirective {}

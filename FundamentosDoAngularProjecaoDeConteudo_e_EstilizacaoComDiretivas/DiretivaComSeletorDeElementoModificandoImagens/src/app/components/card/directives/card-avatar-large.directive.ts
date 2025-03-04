import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'app-Card-Avatar-Large', // Define o seletor para ser usado no HTML
  host: {'class': 'ca-u-card-avatar-large'} // Aplica automaticamente a classe CSS ao elemento
})
export class CardAvatarLargeDirective {

}


import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'app-Card-Avatar-Large, [appCardAvatarLarge]', // Define o seletor para ser usado no HTML
  host: {'class': 'ca-u-card-avatar-large'} // Aplica automaticamente a classe CSS ao elemento
})
export class CardAvatarLargeDirective {
  // O **constructor** é um método especial que é executado automaticamente quando a diretiva é criada.
  // Aqui, injetamos dois serviços do Angular:
  // - `ElementRef`: Permite acessar o elemento HTML onde a diretiva foi aplicada.
  // - `Renderer2`: Fornece métodos seguros para manipular o DOM (alterar estilos, adicionar classes, etc.).
  constructor(private el: ElementRef, private renderer: Renderer2) {

    // Define um estilo CSS no elemento onde a diretiva foi aplicada.
    // Especificamente, estamos adicionando uma transição suave para a animação de aumento de tamanho.
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-in-out');
  }

  // O `@HostListener('mouseenter')` escuta o evento de **entrada do mouse** no elemento.
  // Quando o usuário passa o mouse sobre o elemento, a função `onMouseEnter()` será chamada.
  @HostListener('mouseenter') onMouseEnter() {

    // Altera o estilo CSS do elemento para aumentar seu tamanho em 10% quando o mouse passa sobre ele.
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1.1)');
  }

  // O `@HostListener('mouseleave')` escuta o evento de **saída do mouse** do elemento.
  // Quando o usuário tira o mouse de cima do elemento, a função `onMouseLeave()` será chamada.
  @HostListener('mouseleave') onMouseLeave() {

    // Retorna o elemento ao tamanho original quando o mouse sai.
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

}


// Importa os módulos necessários do Angular para criar uma diretiva
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

// Declaração da diretiva com o seletor 'appInputBackground'
@Directive({
  selector: '[appInputBackground]'
})
export class InputBackgroundDirective {

  // Permite receber um valor externo para a cor do fundo do input
  @Input('bgColor') appInputBackground: string = 'white';

  // Permite receber um valor externo para a cor do texto do input
  @Input('tColor') textColor: string = 'black';

  // Usa o @HostBinding para vincular a propriedade 'style.backgroundColor' ao input
  @HostBinding('style.backgroundColor') bgColor: string = '';

  // Usa o @HostBinding para vincular a propriedade 'style.color' ao input
  @HostBinding('style.color') color: string = '';

  // Captura o evento 'focus' (quando o usuário clica no input)
  @HostListener('focus') onFocus() {
    // Define a cor do fundo e do texto com base nos valores passados via @Input
    this.bgColor = this.appInputBackground;
    this.color = this.textColor;
  }

  // Captura o evento 'blur' (quando o usuário clica fora do input)
  @HostListener('blur') onBlur() {
    // Retorna a cor do fundo para branco e a cor do texto para preto
    this.bgColor = 'white';
    this.color = 'black';
  }
}


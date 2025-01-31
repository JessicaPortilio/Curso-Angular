import { Directive, HostBinding } from '@angular/core';

// Importamos as ferramentas necessárias do Angular:
// Directive – Permite criar uma diretiva personalizada.
// HostBinding – Permite controlar atributos ou propriedades de elementos HTML diretamente dentro da diretiva.

// Criamos a diretiva e definimos seu seletor:
// O Angular reconhecerá [appDisabledDirective] como uma diretiva sempre que for usada em um elemento HTML.
@Directive({
  selector: '[appDisabledDirective]'
})
export class DisabledDirectiveDirective {
  // Criamos a classe da diretiva que será usada para modificar elementos HTML.

  // Se ativássemos essa linha, ela definiria o atributo disabled diretamente no HTML (<button disabled>).
  // Isso faria o botão ficar desativado mesmo que tentássemos mudar seu valor em outro lugar.
  // @HostBinding('attr.disabled') attrDisabled = true;
  
  // @HostBinding('disabled') – Controlamos a propriedade disabled do botão diretamente.
  // propDisabled = false; – O botão começa ativado porque false significa que ele não está desabilitado.
  // Diferente do atributo disabled, essa abordagem permite controle dinâmico e melhor compatibilidade com o Angular.
  @HostBinding('disabled') propDisabled = false;
}


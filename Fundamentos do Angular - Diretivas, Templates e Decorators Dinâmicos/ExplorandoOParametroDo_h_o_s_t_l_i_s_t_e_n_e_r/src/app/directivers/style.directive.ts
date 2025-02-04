import { Directive, HostBinding } from '@angular/core';
// Importamos Directive para criar uma diretiva personalizada.
// Importamos HostBinding para vincular propriedades diretamente ao elemento DOM.

// Criamos a diretiva chamada appStyle, que pode ser usada em elementos HTML (<p appStyle>).
@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  // Vinculando o atributo style diretamente
  // Comentado (//), mas se ativado, esse código define um atributo HTML chamado style.
  // Ele não modifica diretamente o CSS do elemento, apenas altera o atributo no HTML.
  // @HostBinding('attr.style') attrStyle = 'background-color: orange; color: white;';
  // ---------------------------------------------------------------------------------


  // Aplicando estilos diretamente no DOM
  // Também comentado, mas se ativado, vincula o style diretamente ao elemento DOM, e não apenas ao HTML.
  // Isso é mais eficiente e flexível do que attr.style.
  // @HostBinding('style') propStyle = 'background-color: orange; color: white;';
  // ---------------------------------------------------------------------------------


  // Aplicando um objeto de estilos
  // Aqui, podemos definir os estilos usando um objeto JavaScript.
  // Isso permite adicionar várias propriedades de uma vez e modificar valores dinamicamente.
  // @HostBinding('style') propStyleObj = {
  //   backgroundColor: 'orange',
  //   color: 'white'
  // };
  // ---------------------------------------------------------------------------------


  // Aplicando estilos específicos separadamente
  // Aqui, vinculamos apenas uma propriedade de estilo por vez (backgroundColor e color).
  // sso facilita a manipulação de propriedades individuais sem sobrescrever outras.
  // @HostBinding('style.backgroundColor') bgColor = 'orange';
  // @HostBinding('style.color') fgColor = 'white';
  // ---------------------------------------------------------------------------------


  // Aplicando estilos dinâmicos com valores numéricos
  // Aqui, vinculamos apenas o tamanho da fonte (font-size) ao elemento.
  // O .px indica que o valor será interpretado como pixels (40px).
  // Podemos modificar dinamicamente o valor de size para alterar o tamanho do texto.
  @HostBinding('style.fontSize.px') size = 40
}


// Resumo - O que aprendemos?
// @HostBinding('attr.style') → Define um atributo no HTML (menos eficiente).
// @HostBinding('style') → Aplica diretamente no DOM (mais eficiente).
// @HostBinding('style') com objeto → Define múltiplos estilos dinamicamente.
// @HostBinding('style.propriedade') → Modifica estilos específicos sem afetar outros.
// @HostBinding('style.fontSize.px') → Adiciona valores numéricos com unidades (px, %, em, etc.).

// Agora você tem controle total sobre os estilos no Angular usando @HostBinding! 
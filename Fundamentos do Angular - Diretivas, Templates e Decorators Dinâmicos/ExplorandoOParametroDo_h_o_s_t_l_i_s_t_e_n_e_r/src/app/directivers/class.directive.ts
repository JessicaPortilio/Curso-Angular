import { Directive, HostBinding } from '@angular/core';
// Aqui estamos criando uma diretiva Angular chamada appClass.
// Isso significa que qualquer elemento HTML que tiver appClass poderá receber estilos personalizados automaticamente.
@Directive({
  selector: '[appClass]'
})
export class ClassDirective {
  // Este código comentado definiria o atributo class diretamente no elemento.
  // Funciona igual a <p class="meu-text meu-size"></p>.
  // Desvantagem: Ele substitui qualquer outra classe existente no elemento.
  // @HostBinding('attr.class') attrClass = 'meu-text meu-size';
  // -------------------------------------------------------------------------


  // Essa abordagem é semelhante à anterior, mas usa a propriedade className do DOM.
  // Ainda pode substituir outras classes no elemento, então geralmente não é a melhor escolha.
  // @HostBinding('className') className = 'meu-text meu-size';
  // -------------------------------------------------------------------------

  // Aqui estamos definindo um objeto que contém classes e seus estados (true ou false).
  // Se true, a classe será adicionada ao elemento.
  // Se false, a classe será removida (ou nem será adicionada).
  // Esse método é mais dinâmico e recomendado, pois evita sobrescrever outras classes já presentes no elemento.
  @HostBinding('class') classObj = {
    'meu-text': true,
    'meu-size': false,
  };
  // -------------------------------------------------------------------------
  
}

// Método                   |  O que faz?                                         | Quando usar?                                  | Problema?
// [attr.class]            | Define o atributo class diretamente                 | Para definir uma única classe fixa            | Substitui todas as outras classes existentes
//______________________________________________________________________________________________________________________________________________________
// [className]            | Usa a propriedade className do DOM                  | Quando quer adicionar múltiplas class         | Também pode substituir outras classes
//______________________________________________________________________________________________________________________________________________________
// [class]                | Usa um objeto para definir classes dinamicamente    | Quando quer ativar/desativa classes com lógica | Melhor opção para controle dinâmico
//______________________________________________________________________________________________________________________________________________________
// @HostBinding('class') | Faz o mesmo que [class], mas dentro de uma diretiva  | Quando quer aplicar estilos via diretiva       | A forma mais reutilizável

// O @HostBinding nos permite adicionar, remover e modificar classes dinamicamente dentro de uma diretiva.
// O uso de objetos no @HostBinding('class') é mais flexível e evita sobrescrever classes já existentes.
// Podemos ativar/desativar classes condicionalmente sem precisar mexer diretamente no HTML.
// Essa abordagem facilita a reutilização de código e mantém o HTML mais limpo.
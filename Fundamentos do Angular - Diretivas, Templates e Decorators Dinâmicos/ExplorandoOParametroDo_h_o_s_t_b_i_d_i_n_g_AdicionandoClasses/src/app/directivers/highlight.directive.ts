// Importamos os decoradores necessários do Angular para criar uma diretiva.
import { Directive, HostBinding, HostListener } from "@angular/core"; 

// Definimos uma nova diretiva chamada `HighlightDirective`.
// O Angular identificará esta diretiva sempre que encontrar um elemento com o atributo `[appHighlight]`.
@Directive({
    selector: '[appHighlight]' // O seletor indica que essa diretiva pode ser usada como um atributo HTML.
})
export class HighlightDirective { // Criamos a classe da diretiva.

    // O `@HostBinding` vincula a propriedade `bgColor` ao estilo `background-color` do elemento no qual a diretiva está aplicada.
    // Isso significa que qualquer mudança na variável `bgColor` refletirá diretamente no estilo do elemento.
    @HostBinding('style.background-color') bgColor = 'transparent'; // Define o fundo inicial como transparente.

    // O `@HostListener` permite escutar eventos do DOM no elemento onde a diretiva foi aplicada.
    // Aqui, estamos escutando o evento `mouseover`, que ocorre quando o mouse passa sobre o elemento.
    @HostListener('mouseover') onMouseOver() {
        this.bgColor = 'orange'; // Quando o mouse passa sobre o elemento, alteramos o fundo para laranja.
    }

    // Outro `@HostListener`, agora para o evento `mouseout`, que ocorre quando o mouse sai do elemento.
    @HostListener('mouseout') onMouseOut() {
        this.bgColor = 'transparent'; // Quando o mouse sai do elemento, voltamos ao fundo transparente.
    }
}

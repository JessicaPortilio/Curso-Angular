// Importa funcionalidades essenciais do Angular para criar uma diretiva.
import { Directive, HostBinding, Input } from '@angular/core';

/**
 * @Directive é um decorador do Angular que define uma diretiva personalizada.
 * Abaixo, estamos criando uma diretiva chamada `CardTextDescriptionDirective`,
 * que será usada para estilizar descrições dentro de um card.
 */
@Directive({
  // O seletor define onde essa diretiva será aplicada.
  // Sempre que um elemento `<app-Card-Text-Description>` for encontrado no HTML,
  // essa diretiva será ativada automaticamente.
  selector: 'app-Card-Text-Description',

  // `host` permite associar essa diretiva a uma classe CSS automaticamente.
  // Assim, qualquer `<app-Card-Text-Description>` receberá a classe 'ca-u-card-text-description'
  // sem precisar adicioná-la manualmente no HTML.
  host: { 'class': 'ca-u-card-text-description' }
})

// Declara a classe da diretiva, onde será definida a lógica dela.
export class CardTextDescriptionDirective {

  /**
   * A propriedade `color` permite que o usuário defina a cor do texto diretamente no HTML.
   * 
   * Exemplo de uso no HTML:
   * ```html
   * <app-Card-Text-Description color="blue">Texto Azul</app-Card-Text-Description>
   * ```
   */

  // O decorador `@Input()` permite que essa propriedade seja definida pelo usuário no HTML.
  @Input()

  // O decorador `@HostBinding('style.color')` vincula essa propriedade ao estilo do elemento.
  // Isso significa que, quando um usuário define a cor no HTML, o Angular automaticamente
  // aplica essa cor ao `style.color` do elemento correspondente.
  @HostBinding('style.color') color: string = ''; // Define um valor padrão vazio para a cor.

}


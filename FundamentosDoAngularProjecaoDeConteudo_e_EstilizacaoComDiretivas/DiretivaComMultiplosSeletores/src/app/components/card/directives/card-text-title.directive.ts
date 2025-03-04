// ng g directive card-text-title --skip-tests=true
import { Directive } from '@angular/core'; // Importa a funcionalidade de Diretiva do Angular

@Directive({
  selector: 'app-Card-Text-Title, [appCardTextTitle]', // Indica que essa diretiva será aplicada a elementos <app-Card-Text-Title>
  host: {'class': 'ca-u-card-text-title'} // Aplica automaticamente a classe "ca-u-card-text-title" a esse elemento
})
export class CardTextTitleDirective {} // Declara a classe da diretiva


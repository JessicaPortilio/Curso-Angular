import { Directive } from '@angular/core'; // Importa a funcionalidade de Diretiva do Angular

@Directive({
  selector: 'app-Card-Text-Subtitle, [appCardTextSubtitle]', // Indica que essa diretiva será aplicada a elementos <app-Card-Text-Subtitle>
  host: {'class': 'ca-u-card-text-subtitle'} // Aplica automaticamente a classe "ca-u-card-text-subtitle" a esse elemento
})
export class CardTextSubtitleDirective {} // Declara a classe da diretiva


import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CardHeaderDirective } from './card/directives/base/card-header.directive';
import { CardContentDirective } from './card/directives/base/card-content.directive';
import { CardMainTextDirective } from "./card/directives/texts/card-main-text.directive";
import { CardSubTextDirective } from './card/directives/texts/card-sub-text.directive';
import { CardDescriptionTextDirective } from './card/directives/texts/card-description-text.directive';
import { CardSmallImageDirective } from './card/directives/images/card-small-image.directive';
import { CardLargeImageDirective } from './card/directives/images/card-large-image.directive';

@Component({
  selector: 'app-root',
  imports: [CardComponent, 
            CardHeaderDirective, 
            CardContentDirective, 
            CardMainTextDirective, 
            CardSubTextDirective, 
            CardDescriptionTextDirective,
            CardSmallImageDirective,
            CardLargeImageDirective,
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CriacaoDeUmCardComProjecaoDeConteudo';
}

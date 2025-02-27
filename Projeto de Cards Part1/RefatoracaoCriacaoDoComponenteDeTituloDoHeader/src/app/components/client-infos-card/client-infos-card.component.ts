import { Component } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardLineComponent } from "../card-line/card-line.component";
import { CardTitleComponent } from "../card-title/card-title.component";

@Component({
  selector: 'app-client-infos-card',
  imports: [CardItemComponent, CardLineComponent, CardTitleComponent],
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent {

}

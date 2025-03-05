import { Component, OnInit } from '@angular/core';
import { CardItemComponent } from "../card-item/card-item.component";
import { CardLineComponent } from "../card-line/card-line.component";
import { CardTitleComponent } from "../card-title/card-title.component";
import { CardComponent } from "../card/card.component";
import { CardContentDirective } from "../card/directives/card-content.directive";
import { CardHeaderDirective } from "../card/directives/card-header.directive";

@Component({
  selector: 'app-client-infos-card',
  imports: [CardItemComponent, CardLineComponent, CardTitleComponent, CardComponent, CardContentDirective, CardHeaderDirective],
  templateUrl: './client-infos-card.component.html',
  styleUrl: './client-infos-card.component.scss'
})
export class ClientInfosCardComponent implements OnInit {
  headerColor: string = 'blue';

  ngOnInit() {
    setTimeout(() => {
      this.headerColor = 'red';
    }, 3000);
  }
}

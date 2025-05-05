import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { MeuCompComponent } from "./meu-comp/meu-comp.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, MeuCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjetandoUmaTagDengtemplateEmOutroComponente';
}

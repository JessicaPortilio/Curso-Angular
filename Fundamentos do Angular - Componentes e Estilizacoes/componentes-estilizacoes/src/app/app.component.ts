import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsModule } from './cards/cards.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'componentes-estilizacoes';
}

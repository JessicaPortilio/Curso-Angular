import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComDiretivaComponent } from "./com-diretiva/com-diretiva.component";
import { DisabledDirectiveDirective } from './directivers/disabled-directive.directive';
import { StyleDirective } from './directivers/style.directive';



@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ComDiretivaComponent, DisabledDirectiveDirective, StyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ComoCriarUmaDiretivaDeAtributo';
}

import { Component } from '@angular/core';
import { MeuCompComponent } from "./meu-comp/meu-comp.component";

@Component({
  selector: 'app-root',
  imports: [MeuCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngcontainerVSngtemplate';
}

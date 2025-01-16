import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // Define o seletor usado para este componente no HTML
  imports: [RouterOutlet], // Importa funcionalidades do roteador Angular
  templateUrl: './app.component.html', // Define o arquivo de template associado ao componente
  styleUrl: './app.component.scss' // Define o arquivo de estilos associado ao componente
})
export class AppComponent {
  title = 'CSSClassBinding'; // Título do componente (apenas como exemplo, não usado aqui)

  isRedButton = true; // Controla se o botão "Vermelho" terá a classe 'red-button'

  isGreen = true; // Controla a classe dinâmica aplicada ao terceiro botão
}

// Importa os módulos necessários do Angular
import { Component } from '@angular/core';
// Importa o componente de botão para uso no componente pai
import { ButtonComponent } from "./components/button/button.component";

// Define o componente principal da aplicação
@Component({
  selector: 'app-root',          // Nome usado no HTML para renderizar este componente
  imports: [ButtonComponent],    // Importa o componente de botão para ser usado aqui
  templateUrl: './app.component.html', // Caminho do arquivo HTML do componente pai
  styleUrl: './app.component.scss' // Caminho do arquivo de estilos CSS do componente pai
})
export class AppComponent {
  // Método chamado quando o evento 'clicked' do botão é emitido
  buttonCliked() {
    // Exibe uma mensagem no console indicando que o botão foi clicado
    console.log('buttonCliked');
  }
}


import { Component } from '@angular/core'; // Importa a funcionalidade base para criar componentes no Angular.
import { RouterOutlet } from '@angular/router'; // Importa o RouterOutlet para gerenciar a navegação entre páginas.

@Component({
  selector: 'app-root', // Define o seletor do componente para ser usado no HTML como <app-root>.
  imports: [RouterOutlet], // Especifica que o componente pode usar recursos de roteamento.
  templateUrl: './app.component.html', // Define o arquivo de template (HTML) deste componente.
  styleUrl: './app.component.scss' // Define o arquivo de estilo associado ao componente.
})
export class AppComponent {
  // Nome do projeto, usado apenas como exemplo.
  title = 'AttributeBinding';

  // Propriedade que controla o texto do atributo 'title' do botão.
  buttonTitle = 'Título do botão';

  // Propriedade que controla se o botão está desabilitado (true) ou habilitado (false).
  buttonDisabled = true;

  // Função chamada quando o botão "Mudar Props" é clicado.
  onButtonClic() {
    // Altera o valor do 'buttonTitle' para um novo texto.
    this.buttonTitle = 'Título Alterado';

    // Inverte o valor de 'buttonDisabled' (se era true, vira false, e vice-versa).
    this.buttonDisabled = !this.buttonDisabled;
  }
}

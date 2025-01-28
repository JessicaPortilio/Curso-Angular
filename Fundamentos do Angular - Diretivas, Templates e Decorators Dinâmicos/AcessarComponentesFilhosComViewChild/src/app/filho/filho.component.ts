import { Component } from '@angular/core';
// Importa o decorador `Component` do Angular, que será usado para definir o componente.

@Component({
  selector: 'app-filho', 
  // Define o seletor HTML do componente, usado para chamá-lo no template do componente pai.

  imports: [], 
  // Não há módulos adicionais sendo importados neste componente.

  templateUrl: './filho.component.html', 
  // Define o arquivo de template HTML associado a este componente.

  styleUrl: './filho.component.scss' 
  // Define o arquivo de estilos (CSS/SCSS) associado ao componente.
})
export class FilhoComponent {
  // Declara a classe `FilhoComponent`, que contém a lógica do componente filho.

  message: string = 'Sou o Componente filho!';
  // Declara uma variável chamada `message` que armazena a mensagem inicial exibida no componente filho.

  dizerOi() {
    // Declara um método chamado `dizerOi`, que será chamado pelo componente pai.

    alert('Oi!!!!');
    // Exibe uma caixa de alerta com a mensagem "Oi!!!!".
  }
}

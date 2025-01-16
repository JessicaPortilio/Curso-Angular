import { Component } from '@angular/core'; // Importa o núcleo do Angular
import { RouterOutlet } from '@angular/router'; // Importa o suporte para roteamento no Angular

@Component({
  selector: 'app-root', // Define o seletor usado no HTML para este componente
  imports: [RouterOutlet], // Declara que o componente pode usar recursos do roteamento
  templateUrl: './app.component.html', // Define o arquivo HTML para o componente
  styleUrl: './app.component.scss' // Define o arquivo de estilo para o componente
})
export class AppComponent {
  title = 'CSSStyleBinding'; // Define o título da aplicação

  // Define a largura inicial do 'Botão 1' como uma string
  widthButton1 = '110px';

  // Define a largura inicial do 'Botão 2' como um número (unidade será adicionada automaticamente)
  widthButton2 = 130;

  // Define um objeto inicial de estilos para o 'Botão 5'
  stylesObj = {
    width: '160px', // Largura inicial de 160px
    backgroundColor: 'grey', // Cor de fundo inicial cinza
  };

  // Método para alterar diretamente as propriedades do objeto de estilo, porém dessa forma não atualiza
  updateStyleObj() {
    this.stylesObj.width = '170px'; // Altera a largura para 170px
    this.stylesObj.backgroundColor = 'lightblue'; // Altera a cor de fundo para azul claro
  }

  // Método para substituir o objeto de estilo por um novo objeto, agora sim atualiza
  updateStyleObjCorrect() {
    this.stylesObj = {
      width: '170px', // Define a nova largura como 170px
      backgroundColor: 'lightblue', // Define a nova cor de fundo como azul claro
    };
  }

  // Método para alterar apenas a largura do 'Botão 2'
  updateWidth() {
    this.widthButton2 = 200; // Define a nova largura como 200px
  }
}

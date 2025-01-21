import { CommonModule } from '@angular/common'; // Importa funcionalidades comuns, como *ngIf
import { Component } from '@angular/core'; // Importa a classe base para criar componentes no Angular

@Component({
  selector: 'app-root', // Define o seletor usado no HTML para identificar este componente
  imports: [CommonModule], // Declara os módulos necessários, como o CommonModule para *ngIf
  templateUrl: './app.component.html', // Caminho para o arquivo HTML deste componente
  styleUrl: './app.component.scss' // Caminho para o arquivo de estilos SCSS deste componente
})
export class AppComponent {
  minhaProp = true; // Propriedade booleana que controla qual template será exibido no *ngIf

  pessoa = { // Objeto que simula dados de uma pessoa
    status: 1, // Propriedade que pode ser avaliada como truthy
    name: 0, // Propriedade que pode ser avaliada como falsy
  };

  // Método que alterna o valor de 'minhaProp' entre true e false
  toogleProp() {
    this.minhaProp = !this.minhaProp; // Invertemos o valor de 'minhaProp' para alternar os templates
  }

  // Método para testar valores que são considerados "truthy" (verdadeiros)
  isTruthy() {
    // Exemplos de valores que podem ser retornados como "truthy":
    // return {};           // Objeto vazio é truthy
    // return [];           // Array vazio é truthy
    // return true;         // Boolean true é truthy
    // return 1;            // Número diferente de 0 é truthy
    // return "teste";      // String não vazia é truthy
    // return "0";          // String não vazia é truthy
    // return "false";      // String não vazia é truthy
    // return this.pessoa.status; // Valor 1 é truthy
  }

  // Método para testar valores que são considerados "falsy" (falsos)
  isFalsy() {
    // Exemplos de valores que podem ser retornados como "falsy":
    // return false;        // Boolean false é falsy
    // return 0;            // Número 0 é falsy
    // return "";           // String vazia é falsy
    // return '';           // String vazia é falsy
    // return null;         // null é falsy
    // return undefined;    // undefined é falsy
    // return -0;           // Número -0 é falsy
    // return NaN;          // NaN (Not a Number) é falsy
    //return this.pessoa.name; // Retorna o valor 0, que é falsy
  }
}

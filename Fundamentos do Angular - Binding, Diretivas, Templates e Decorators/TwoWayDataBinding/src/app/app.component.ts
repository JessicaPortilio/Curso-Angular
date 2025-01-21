// Importa o núcleo do Angular para criar um componente
import { Component } from '@angular/core';

// Importa o módulo de formulários para usar o [(ngModel)]
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root', // Define o seletor usado para inserir este componente no HTML
  imports: [FormsModule], // Importa o FormsModule para habilitar o uso de [(ngModel)]
  templateUrl: './app.component.html', // Caminho do arquivo de template HTML
  styleUrl: './app.component.scss' // Caminho do arquivo de estilos CSS
})
export class AppComponent {
  // Declara uma variável chamada 'name' que será usada para armazenar o texto digitado no input
  name: string = 'Felipe'; // Inicializa a variável 'name' com o valor 'Felipe'

  // Função chamada toda vez que o valor do input muda
  handleInputchange(event: string) {
    console.log(event); // Imprime o valor atualizado do input no console do navegador
    // this.name = event; // Linha comentada, mas poderia atualizar a variável 'name' diretamente
  }
}

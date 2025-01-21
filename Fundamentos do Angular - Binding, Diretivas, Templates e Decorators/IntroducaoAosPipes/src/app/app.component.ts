import { CommonModule } from '@angular/common'; // Importa funcionalidades básicas para o Angular
import { Component } from '@angular/core'; // Importa a funcionalidade para criar componentes
import { StatusClassPipe } from './pipes/status-class.pipe'; // Importa o pipe criado

@Component({
  selector: 'app-root', // Define o seletor do componente para ser usado no HTML
  imports: [CommonModule, StatusClassPipe], // Importa módulos e pipes utilizados
  templateUrl: './app.component.html', // Define o arquivo HTML deste componente
  styleUrl: './app.component.scss' // Define o arquivo de estilos deste componente
})
export class AppComponent { // Define a classe do componente

  // Define os dados da primeira pessoa
  pessoa = {
    name: 'Jessica', // Nome da pessoa
    status: 1 // Status da pessoa (ativa)
  };

  // Define os dados da segunda pessoa
  pessoa2 = {
    name: 'Carlos', // Nome da pessoa
    status: 2 // Status da pessoa (parcial)
  };

  // Define os dados da terceira pessoa
  pessoa3 = {
    name: 'Amanda', // Nome da pessoa
    status: 3 // Status da pessoa (bloqueado)
  };

// Explicação:
//  A classe AppComponent representa o componente principal da aplicação.
//  As propriedades pessoa, pessoa2 e pessoa3 contêm informações sobre cada pessoa, incluindo o nome e o status.
//  Essas propriedades são usadas no template para exibir os dados e aplicar classes dinamicamente.
}

// Importa a funcionalidade principal de componentes do Angular.
import { Component } from '@angular/core'; 

// Importa o roteador para lidar com a navegação entre páginas/componentes da aplicação.
import { RouterOutlet } from '@angular/router';
import { Comp2Component } from "./comp2/comp2.component"; 

// Define as configurações do componente principal da aplicação.
@Component({
  // O nome que será usado no HTML para referenciar este componente.
  selector: 'app-root', 

  // Indica que o componente utiliza o RouterOutlet para carregar outros componentes dinamicamente.
  imports: [RouterOutlet, Comp2Component], 

  // O arquivo HTML que define a aparência e estrutura visual deste componente.
  templateUrl: './app.component.html', 

  // O arquivo SCSS (folha de estilo) que define a aparência (cores, tamanhos, espaçamentos) do componente.
  styleUrl: './app.component.scss' 
})

// Declaração da classe principal do componente que controla o comportamento e os dados dele.
export class AppComponent { 
  // Define uma propriedade chamada 'title', usada para armazenar o título da aplicação.
  title = 'projeto-inicial'; 
}

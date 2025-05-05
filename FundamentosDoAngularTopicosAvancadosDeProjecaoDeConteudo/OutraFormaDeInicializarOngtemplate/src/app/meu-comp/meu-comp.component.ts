import { Component, OnInit } from '@angular/core'; 
// Importa os módulos necessários do Angular. 
// Component: Define que esta classe será um componente do Angular. 
// OnInit: Interface usada para executar código quando o componente é inicializado.

@Component({
  selector: 'app-meu-comp', 
  // Define o nome da tag HTML usada para chamar este componente (<app-meu-comp>).

  imports: [], 
  // Aqui normalmente são importados outros componentes ou módulos, mas neste caso está vazio.

  templateUrl: './meu-comp.component.html', 
  // Especifica o arquivo HTML que contém a estrutura visual do componente.

  styleUrl: './meu-comp.component.scss' 
  // Especifica o arquivo de estilos CSS/SCSS que será aplicado a este componente.
})
export class MeuCompComponent implements OnInit { 
  // Declaração da classe `MeuCompComponent`, que implementa a interface `OnInit`.

  ngOnInit() { 
    // O método `ngOnInit()` é chamado automaticamente pelo Angular quando o componente é inicializado.

    console.log('MeuCompComponent OnInit'); 
    // Exibe a mensagem no console para indicar que o componente foi carregado corretamente.
  }
}

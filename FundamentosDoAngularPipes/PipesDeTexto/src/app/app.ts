// Importa o decorator @Component — usado para transformar a classe abaixo em um componente Angular.
import { Component } from '@angular/core';

// RouterOutlet é a "janela" que o Angular usa para renderizar componentes filhos quando você muda de rota.
// Ou seja: quando o usuário navega, o conteúdo associado à rota aparece onde o RouterOutlet está.
import { RouterOutlet } from '@angular/router';

// Estes imports aparentemente apontam para componentes/customizações que você criou.
// Pelo nome, são componentes de demonstração para cada pipe (Uppercase, Lowercase, etc).
// Note que NÃO são os pipes built-in do Angular — são componentes/elementos personalizados.
import { Uppercase } from "./uppercase/uppercase";
import { Lowercase } from "./lowercase/lowercase";
import { Titlecase } from "./titlecase/titlecase";
import { Json } from "./json/json";
import { Slice } from "./slice/slice";

/*
  @Component configura metadados do componente:
  - selector: qual tag HTML representa esse componente (<app-root>).
  - imports: lista de módulos/declarações que esse componente usa diretamente.
    -> ATENÇÃO: a propriedade `imports` só tem efeito se o componente for *standalone* (Angular 14+).
        Se o componente NÃO for standalone, você deverá declarar esses itens no NgModule (app.module.ts).
  - templateUrl: arquivo HTML que contém a marcação do componente.
  - styleUrl: arquivo de estilos (forma mais comum é usar 'styleUrls' com array).
*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Uppercase, Lowercase, Titlecase, Json, Slice],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

// A classe do componente. Tudo que estiver aqui (propriedades/métodos) pode ser usado no template.
export class App {
  // 'protected' funciona igual a 'public' para uso no template — a visibilidade principal importa para TS/OOP,
  // mas para o template o Angular consegue acessar propriedades public/protected.
  protected title = 'PipesDeTexto';
}

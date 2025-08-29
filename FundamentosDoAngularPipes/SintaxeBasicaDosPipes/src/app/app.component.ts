// Importamos funcionalidades básicas do Angular usadas em praticamente todo app.
// CommonModule traz diretivas como *ngIf, *ngFor e o pipe date, entre outras.
import { CommonModule } from '@angular/common';

// Importamos o decorator @Component, que transforma uma classe normal em um "componente" do Angular.
import { Component } from '@angular/core';

// FormsModule permite usar formulários e a diretiva [(ngModel)] para ligar inputs às variáveis do componente.
import { FormsModule } from '@angular/forms';

// O decorator @Component "configura" o nosso componente.
// Aqui dizemos: qual é a tag HTML dele (selector), que módulos ele usa (imports),
// qual arquivo é o HTML (templateUrl) e qual o arquivo de estilos (styleUrl).
@Component({
  // <app-root> será a tag que representa este componente no HTML (por exemplo, no index.html).
  selector: 'app-root',

  // Como este componente é "standalone", informamos os módulos necessários aqui.
  // CommonModule e FormsModule ficam disponíveis apenas dentro deste componente (e filhos).
  imports: [CommonModule, FormsModule],

  // Caminho do arquivo de template (HTML) que mostra o que aparece na tela.
  templateUrl: './app.component.html',

  // Caminho do arquivo de estilos (CSS/SCSS) específico deste componente.
  // Observação: em versões mais novas do Angular, "styleUrl" (singular) é aceito.
  // Em versões mais antigas, usa-se "styleUrls" (plural) com array.
  styleUrl: './app.component.scss'
})

// Esta classe é o "cérebro" do componente: aqui ficam os dados e a lógica.
// Tudo que você declarar aqui pode ser usado no HTML (template) do componente.
export class AppComponent {
  // Uma propriedade simples do tipo texto. Poderia ser usada no HTML como {{ title }}.
  title = 'SintaxeBasicaDosPipes';

  // Um objeto "pessoa" com duas propriedades: nome (texto) e idade (número).
  // No template, podemos mostrar esse objeto inteiro, ou apenas partes, usando {{ pessoa.nome }}, {{ pessoa.idade }}, etc.
  pessoa = {
    nome: 'Jessica',
    idade: 26,
  };
}

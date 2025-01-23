// Importa a classe Component do Angular para criar um componente.
import { Component } from '@angular/core';
// Importa o módulo AngularMaterialModule para usar seus recursos no componente.
import { AngularMaterialModule } from '../../angular-material/angular-material.module';

// Define um componente chamado UserDetailsComponent
@Component({
  selector: 'app-user-details',  // Define o seletor HTML para o componente
  imports: [AngularMaterialModule],  // Importa o módulo AngularMaterialModule para usar componentes de Angular Material.
  templateUrl: './user-details.component.html',  // Define o caminho para o arquivo de template HTML do componente.
  styleUrl: './user-details.component.scss'   // Define o caminho para o arquivo de estilo SCSS do componente.
})
// Classe do componente que contém a lógica do UserDetailsComponent
export class UserDetailsComponent {
  // Lógica do componente (ainda não definida)
}

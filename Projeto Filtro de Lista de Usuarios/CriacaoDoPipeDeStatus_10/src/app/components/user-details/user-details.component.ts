// Importa a classe Component do Angular para criar um componente.
import { Component, Input } from '@angular/core';
// Importa o módulo AngularMaterialModule para usar seus recursos no componente.
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
// Importa o módulo Angular Material para utilizar seus componentes de design.
import { IUser } from '../../interfaces/user/user.interface';
import { PipesModule } from '../../pipes/pipes.module';

// Importa a interface que define o modelo do objeto `IUser`.

// Define um componente chamado UserDetailsComponent
@Component({
  selector: 'app-user-details',  // Define o seletor HTML para o componente
  imports: [AngularMaterialModule, PipesModule],  // Importa o módulo AngularMaterialModule para usar componentes de Angular Material.
  templateUrl: './user-details.component.html',  // Define o caminho para o arquivo de template HTML do componente.
  styleUrl: './user-details.component.scss'   // Define o caminho para o arquivo de estilo SCSS do componente.
})
// Classe do componente que contém a lógica do UserDetailsComponent
export class UserDetailsComponent {

  // Define uma propriedade de entrada chamada "user". Essa propriedade receberá dados de um componente pai.
  // O decorator @Input permite que o valor dessa propriedade seja passado dinamicamente para o componente.
  @Input({required: true}) user: IUser = { } as IUser;
  
}

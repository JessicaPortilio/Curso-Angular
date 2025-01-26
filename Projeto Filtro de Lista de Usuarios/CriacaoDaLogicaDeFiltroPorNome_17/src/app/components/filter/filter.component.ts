import { Component, EventEmitter, Output } from '@angular/core';
// Importa a classe `Component` para criar componentes no Angular
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
// Importa um módulo personalizado que encapsula componentes do Angular Material
import { IFilterOptions } from '../../interfaces/filter-options.interface';
// Importa uma interface para definir o formato dos dados do filtro
import { CommonModule } from '@angular/common';
// Importa funcionalidades básicas do Angular
import { FormsModule } from '@angular/forms';
// Importa o módulo para usar formulários e a diretiva `ngModel`

@Component({
  selector: 'app-filter',
  // Define o seletor HTML usado para renderizar o componente (ex.: `<app-filter>`)
  imports: [AngularMaterialModule, CommonModule, FormsModule],
  // Declara os módulos que o componente utiliza (Angular Material, funcionalidades básicas e formulários)
  templateUrl: './filter.component.html',
  // Caminho para o arquivo HTML (template) do componente
  styleUrl: './filter.component.scss'
  // Caminho para o arquivo de estilos SCSS do componente
})
export class FilterComponent {
  // Declaração da classe principal do componente

  // Objeto que armazena os valores dos filtros. Ele segue o formato da interface `IFilterOptions`
  filterOptions: IFilterOptions = {
    name: undefined,
    startDate: undefined,
    endDate: undefined,
    status: undefined,
  };

  // dateSelected(date: Date){
  //   console.log(date);
  //   console.log(date instanceof Date);
  //   console.log(date.getMonth());
  // } 

  // Lista de opções de status para preencher o dropdown. Cada status tem uma descrição e um valor correspondente.
  statusList= [
    {description: 'Ativo', value: true},
    {description: 'Inativo', value: false},
  ];
  
  // Evento que será emitido quando o botão "Filtrar" for clicado. Ele envia os dados do filtro para o componente pai.
  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()

  // Método chamado quando o botão "Filtrar" é clicado
  onFilter() {
    // Imprime os valores dos filtros no console para depuração
    // console.log(this.filterOptions);
    
    // Emite o evento, enviando os valores dos filtros preenchidos pelo usuário.
    this.onFilterEmitt.emit(this.filterOptions);
  }
}

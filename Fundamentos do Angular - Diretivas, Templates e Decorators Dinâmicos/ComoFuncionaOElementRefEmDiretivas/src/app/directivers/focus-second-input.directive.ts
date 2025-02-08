// Importamos os módulos necessários do Angular
import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';

// O decorator @Directive define uma diretiva Angular personalizada
@Directive({
  selector: '[appFocusSecondInput]' // Esse seletor será aplicado a qualquer elemento que tenha a diretiva "appFocusSecondInput"
})
export class FocusSecondInputDirective implements AfterViewInit { // Implementamos AfterViewInit para manipular elementos após a visualização ser carregada

  /*
   * @HostBinding permite manipular diretamente estilos e propriedades do elemento onde a diretiva está aplicada.
   * Esses exemplos foram comentados, mas se ativados, fariam o seguinte:
   * - Alterariam o fundo para azul
   * - Definiriam o texto interno da div como "Sou uma div!"
   * - Definiriam a cor do texto como branco
   */
  // @HostBinding('style.backgroundColor') bgColor = 'blue';
  // @HostBinding('textContent') texto = 'Sou uma div!';
  // @HostBinding('style.color') fgColor = 'white';

  // O ElementRef nos dá acesso ao elemento do DOM onde a diretiva foi aplicada
  constructor(private _elRef: ElementRef) {}

  // O método ngAfterViewInit é chamado quando a visualização do componente está completamente carregada
  ngAfterViewInit() {
    // Exibimos no console o elemento no qual a diretiva foi aplicada
    console.log(this._elRef);

    // Selecionamos todos os elementos <input> que estão dentro do elemento onde a diretiva foi aplicada
    const inputList = this._elRef.nativeElement.querySelectorAll('input') as HTMLInputElement[];
    
    // Exibimos no console a lista de inputs encontrados dentro do elemento
    console.log(inputList);

    // Verificamos se existem pelo menos dois inputs dentro do elemento
    if(inputList.length > 1) {
      // Se houver pelo menos dois inputs, damos foco ao segundo input (índice 1 do array)
      inputList[1].focus();
    }
  }
}
// O Angular aplica essa diretiva ao elemento HTML indicado.
// Assim que a visualização do componente está carregada (ngAfterViewInit), a diretiva busca todos os inputs dentro do elemento.
// Se houver pelo menos dois inputs, o segundo input recebe foco automaticamente.

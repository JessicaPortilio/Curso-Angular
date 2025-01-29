import { CommonModule } from '@angular/common'; // Importa o CommonModule, que fornece diretivas comuns como *ngFor e *ngIf.
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core'; // Importa funcionalidades do Angular, como decoradores e interfaces.
import { FormsModule } from '@angular/forms'; // Importa o FormsModule, que permite trabalhar com formulários e two-way data binding.

@Component({
  selector: 'app-root', // Define o seletor do componente. No HTML, ele será usado como <app-root>.
  imports: [CommonModule, FormsModule], // Importa os módulos necessários para este componente.
  templateUrl: './app.component.html', // Define o arquivo HTML que contém o template do componente.
  styleUrl: './app.component.scss' // Define o arquivo de estilo SCSS para o componente.
})
export class AppComponent implements AfterViewInit { // Define a classe do componente e implementa a interface AfterViewInit.
  buttonsList = [ // Cria uma lista de strings que representam os textos dos botões.
    "Botão 1",
    "Botão 2",
    "Botão 3",
  ];

  @ViewChildren('meuButton') // Usa o decorador @ViewChildren para obter uma lista de referências aos elementos do DOM com o template variable #meuButton.
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>; // Declara uma propriedade para armazenar a lista de referências aos botões.

  ngAfterViewInit() { // Método do ciclo de vida do Angular, chamado após a visualização do componente ser totalmente inicializada.
    console.log(this.buttonsEl) // Exibe no console a lista de referências aos botões.
    // console.log(this.buttonsEl.toArray()) // Converte a lista de referências para um array e exibe no console.

    // const primeiro = this.buttonsEl.toArray()[0]; // Obtém a referência ao primeiro botão da lista.
    // primeiro.nativeElement.style.backgroundColor = 'orange' // Altera a cor de fundo do primeiro botão para laranja.
  
    // Observa mudanças na lista de referências dos botões.
    this.buttonsEl.changes.subscribe((result) => {
      console.log(result) // Exibe no console as mudanças na lista de referências dos botões.
    })
  
  }

  changeColor(event: Event){ // Método chamado quando um botão é clicado.
    console.log(event) // Exibe no console o evento de clique.
    
    const btnElement = event.target as HTMLButtonElement; // Obtém o elemento HTML do botão que foi clicado.

    btnElement.style.backgroundColor = 'orange'; // Altera a cor de fundo do botão clicado para laranja.
    btnElement.style.color = 'white'; // Altera a cor do texto do botão clicado para branco.
  }

  resetButtons() { // Método chamado para resetar as cores dos botões.
    this.buttonsEl.forEach((btnEl) => { // Itera sobre cada botão na lista de referências.
      console.log(btnEl) // Exibe no console a referência do botão atual.
      btnEl.nativeElement.style.backgroundColor = ''; // Remove a cor de fundo do botão.
      btnEl.nativeElement.style.color = 'black'; // Define a cor do texto do botão como preto.
    })
  }

  first() {
    // Exemplo de como acessar o primeiro botão da lista de referências:
    // const primeiro = this.buttonsEl.get(0); // Método 1: Usa o método "get" para acessar o primeiro botão.
    // const primeiro = this.buttonsEl.find((btnEl) => btnEl.nativeElement.className === 'btn-0'); // Método 2: Usa o método "find" para buscar o botão com a classe "btn-0".
    const primeiro = this.buttonsEl.toArray()[0]; // Método 3: Converte a lista de referências para um array e acessa o primeiro elemento.

    console.log(primeiro) // Exibe no console a referência ao primeiro botão.
}

  remove() {
    this.buttonsList.shift(); // Remove o primeiro item da lista buttonsList.
  }
}
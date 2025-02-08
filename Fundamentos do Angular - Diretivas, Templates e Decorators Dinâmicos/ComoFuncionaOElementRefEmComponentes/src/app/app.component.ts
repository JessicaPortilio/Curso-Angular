import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// Importamos os módulos necessários:

// Component → Define um componente Angular.
// OnInit → Um ciclo de vida que roda quando o componente é inicializado.
// AfterViewInit → Um ciclo de vida que roda depois que a visualização do componente foi carregada.
// ElementRef → Permite acessar diretamente elementos do DOM no Angular.
// ViewChild → Permite capturar referências a elementos do HTML dentro do TypeScript.


// Define o componente principal (app-root) da aplicação.
// Importa o HTML (app.component.html) e o arquivo de estilos (app.component.scss).
@Component({
  selector: 'app-root', 
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnInit {
  // A classe AppComponent implementa dois ciclos de vida do Angular:
  // OnInit → Executa código logo após a inicialização do componente.
  // AfterViewInit → Executa código após a renderização dos elementos da interface.

  // Usando ViewChild para acessar uma div
  // @ViewChild('minhaDiv') → Captura a referência da <div> com #minhaDiv.
  // divEl! → Essa propriedade armazenará a referência do elemento.
  @ViewChild('minhaDiv') divEl!: ElementRef<HTMLDivElement>;


  // Usando ElementRef para acessar o DOM
  // O ElementRef no construtor permite acessar todo o DOM do componente.
  // _elREf.nativeElement faz referência à raiz do componente (<app-root
  constructor(private readonly _elREf: ElementRef) {  }


  // Manipulando Elementos no ngOnInit()
  // ngOnInit() é executado assim que o componente é criado.
  ngOnInit() {
    // console.log(this._elREf) → Exibe no console a referência do componente raiz (<app-root>).
    console.log(this._elREf)

    // Buscando a div pelo id e alterando seu conteúdo
    // querySelector('#minha-outra-div') → Busca a <div> pelo id "minha-outra-div"
    // as HTMLDivElement → Converte o elemento para um HTMLDivElement (evita erros de tipagem).
    const divEl = this._elREf.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    // Alterando o Texto e Estilos da div
    divEl.textContent = 'Sou a outra div!'; // divEl.textContent = 'Sou a outra div!' → Modifica o texto da <div>.
    divEl.style.backgroundColor = 'blue'; // divEl.style.backgroundColor = 'blue' → Muda a cor de fundo para azul.
    divEl.style.color = 'white'; // divEl.style.color = 'white' → Muda a cor do texto para branco.

    // Adicionando um Evento de click à div
    // Quando o usuário clica na <div>, o console exibe a mensagem: "Cliquei na div!!!".
    divEl.addEventListener('click', () => {
      console.log('Cliquei na div!!!')
    })


    // Exibindo a div no Console
    // Exibe a <div> completa no console para verificar suas propriedades.
    console.log(divEl)
  }


  // Manipulando Elementos no ngAfterViewInit()
  // ngAfterViewInit() roda após o HTML ser renderizado.
  // Isso é necessário porque ViewChild (#minhaDiv) só pode ser acessado depois da renderização.
  ngAfterViewInit(){
    // Modificando o Estilo e Texto da div Capturada com ViewChild
    this.divEl.nativeElement.style.backgroundColor = 'orange'; // → Muda o fundo para laranja.
    this.divEl.nativeElement.textContent = 'Sou uma div!'; // → Muda o texto da div.
    this.divEl.nativeElement.classList.add('minha-clase'); // → Adiciona uma classe CSS ao elemento.
  }

}


// Resumo
// Método	                                     O que faz?
// @ViewChild('minhaDiv')	                     Captura a referência de um elemento com #minhaDiv.
// ElementRef	                                 Permite acessar elementos diretamente no DOM.
// ngOnInit()	                                 Executa ações ao inicializar o componente.
// ngAfterViewInit()	                         Executa ações após a renderização do HTML.
// querySelector('#minha-outra-div')	         Seleciona um elemento pelo ID.
// style.backgroundColor = 'blue'	             Muda a cor de fundo do elemento.
// addEventListener('click', callback)	       Adiciona um evento de clique ao elemento.
// classList.add('minha-clase')	               Adiciona uma classe CSS ao elemento.


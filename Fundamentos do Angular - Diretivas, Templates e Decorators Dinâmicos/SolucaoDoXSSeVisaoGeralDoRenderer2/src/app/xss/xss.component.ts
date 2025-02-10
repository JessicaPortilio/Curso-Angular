import { Component, ElementRef, Renderer2 } from '@angular/core'; // Importamos as funcionalidades do Angular necessárias

@Component({
  selector: 'app-xss', // Define o seletor do componente, ou seja, o nome que usaremos no HTML para chamá-lo
  imports: [], // Aqui poderíamos importar módulos necessários, mas no momento não há nenhum
  templateUrl: './xss.component.html', // Diz onde está o arquivo HTML deste componente
  styleUrl: './xss.component.scss' // Diz onde está o arquivo de estilos (CSS) deste componente
})
export class XssComponent { // Criamos uma classe chamada `XssComponent`, que é o nosso componente Angular
  constructor(private readonly _elRef: ElementRef, 
              private readonly _renderer: Renderer2) {} 
  // 🔹 O construtor recebe uma referência ao próprio elemento do DOM onde esse componente será usado.
  // 🔹 O `ElementRef` nos permite manipular diretamente elementos HTML dentro do componente.
  // 🔹 Agora, adicionamos o `Renderer2`, que é uma ferramenta do Angular para manipular o DOM de forma segura.
  
  createElement(inputText: string){ // Criamos um método chamado `createElement`, que recebe um texto digitado pelo usuário como parâmetro

    const divEl = document.createElement('div'); 
    // 🔹 Criamos um novo elemento HTML <div> dinamicamente no JavaScript.
    // 🔹 Esse elemento servirá para armazenar o texto digitado pelo usuário.
    

    divEl.innerHTML = inputText; 
    // 🔹 O texto digitado pelo usuário (inputText) é inserido dentro da <div>.
    // 🔴 Esse é um grande problema de segurança! Se o usuário digitar um código malicioso (como um script), ele será executado.

    this._elRef.nativeElement.appendChild(divEl); 
    // 🔹 Adicionamos essa <div> ao elemento HTML principal do componente.
    // 🔹 Isso faz com que a nova <div> apareça na página.
  }

  createElementCorrect(inputText: string){
    const divEl = this._renderer.createElement('div');
    // 🔹 Criamos um novo elemento <div> de forma segura usando o Renderer2.

    const text = this._renderer.createText(inputText);
    // 🔹 Criamos um nó de texto puro (sem HTML), impedindo que código malicioso seja executado.

    this._renderer.appendChild(divEl, text);
    // 🔹 Adicionamos o texto à <div>.

    this._renderer.setStyle(divEl, 'color', 'white');
    this._renderer.addClass(divEl, 'bg-red');

    this._renderer.appendChild(this._elRef.nativeElement, divEl);
    // 🔹 Finalmente, adicionamos essa <div> à página.


    const novaDiv = document.createElement('div');
    novaDiv.textContent = 'Sou a nova div!';
    this._renderer.appendChild(this._elRef.nativeElement, novaDiv);

  }
}

// Explicação do Problema de Segurança (XSS - Cross-Site Scripting)
// No código acima, usamos innerHTML para inserir o conteúdo do usuário dentro do HTML. 
// Isso significa que qualquer código HTML ou JavaScript que o usuário digitar será interpretado pelo navegador.
// Exemplo de ataque XSS: Se o usuário digitar o seguinte texto no input e clicar no botão:
// <img src="teste.jpg" onerror="alert('Imagem não encontrada');">
// O que acontecerá?

// Como innerHTML interpreta o código HTML, ele criará uma imagem invisível (<img src="teste.jpg">).
// Como o caminho "teste.jpg" não existe, o navegador acionará o evento onerror, 
// que executará alert('Imagem não encontrada');.
// Isso significa que um usuário mal-intencionado pode inserir qualquer código JavaScript e 
// fazer coisas perigosas, como roubar cookies ou redirecionar usuários para sites falsos.

// Solução para Evitar XSS

// Podemos usar o Renderer2 do Angular para inserir apenas texto puro, sem interpretar código HTML.

// constructor(private _elRef: ElementRef, private _renderer: Renderer2) {} 
//   // 🔹 Agora, adicionamos o `Renderer2`, que é uma ferramenta do Angular para manipular o DOM de forma segura.

//   createElement(inputText: string){
//     const divEl = this._renderer.createElement('div'); 
//     // 🔹 Criamos um novo elemento <div> de forma segura usando o Renderer2.

//     const textNode = this._renderer.createText(inputText);
//     // 🔹 Criamos um nó de texto puro (sem HTML), impedindo que código malicioso seja executado.

//     this._renderer.appendChild(divEl, textNode);
//     // 🔹 Adicionamos o texto à <div>.

//     this._renderer.appendChild(this._elRef.nativeElement, divEl);
//     // 🔹 Finalmente, adicionamos essa <div> à página.
//   }

// Por que essa solução funciona?
// O Renderer2 impede que qualquer código HTML seja interpretado.
// Se o usuário digitar <script>alert("XSS")</script>, ele será tratado apenas como texto e não será executado.

// Resumo
// ❌ Código inseguro (innerHTML) → Permite execução de scripts e ataques XSS.
// ✅ Código seguro (Renderer2) → Apenas adiciona texto puro, sem interpretação de código.

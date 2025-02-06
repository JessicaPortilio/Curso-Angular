import { Directive, HostListener } from '@angular/core';
// Importamos Directive para criar uma diretiva personalizada.
// Importamos HostListener para ouvir eventos dentro da diretiva, como clique e teclado.

// Criamos a diretiva chamada appListenerDirective.
// Qualquer elemento HTML que usar [appListenerDirective] terá essa lógica aplicada.
@Directive({
  selector: '[appListenerDirective]'
})
export class ListenerDirectiveDirective {

  // @HostListener('click') faz com que esse método seja executado sempre que o usuário clicar no elemento.
  // Se o usuário clicar no <input>, o console mostrará "CLICOU!".
  @HostListener('click') onClick() {
    console.log('CLICOU!')
  }


  // @HostListener('keyup', ['$event', '"Meu Argumento"']) escuta o evento de tecla solta.
  // O primeiro parâmetro (event: KeyboardEvent) captura o evento de teclado.
  // O segundo parâmetro (param2: string) sempre recebe o valor "Meu Argumento", só para demonstrar que podemos passar argumentos personalizados.
  @HostListener('keyup', ['$event', '"Meu Argumento"']) onkeyup(event: KeyboardEvent, param2: string) {
    // Exibe "Digitou" no console sempre que o usuário pressionar uma tecla.
    console.log('Digitou')

    // Obtém o texto completo que o usuário digitou no campo <input>.
    // event.target se refere ao elemento HTML que recebeu o evento (o <input>).
    // Como sabemos que é um <input>, usamos (event.target as HTMLInputElement) para garantir que TypeScript entenda.
    // value contém o texto digitado no campo.
    const fullText = (event.target as HTMLInputElement).value
    console.log(fullText)

    // Exibe "Meu Argumento" no console.
    // Isso mostra que podemos passar argumentos personalizados para o evento no @HostListener.
    console.log(param2)
  }
}

// O @HostListener nos permite capturar eventos do DOM diretamente dentro da diretiva.
// Podemos escutar eventos como click, keyup, mouseover e muitos outros.
// Podemos capturar eventos do próprio elemento e até passar argumentos personalizados.
// Esse código é útil para criar comportamentos reutilizáveis, como atalhos de teclado, interações de mouse e validações automáticas.
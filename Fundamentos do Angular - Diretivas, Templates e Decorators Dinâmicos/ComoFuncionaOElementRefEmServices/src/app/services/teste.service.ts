// Este serviço (TesteService) é responsável por criar dinamicamente um novo 
// elemento <div> e adicioná-lo a um elemento existente na página.

import { ElementRef, Injectable } from "@angular/core";

// 🔹 `Injectable` permite que este serviço seja injetado em outros componentes e serviços do Angular.
@Injectable({
    providedIn: 'root', // 🔹 Isso significa que este serviço está disponível globalmente na aplicação.
})
export class TesteService {

    // 🔹 Construtor comentado porque `ElementRef` será passado como parâmetro na função `create()`.
    // constructor(private _elRef: ElementRef) {}

    create(elRef: ElementRef) {
        // 🔹 Criamos um novo elemento <div> dinamicamente no DOM.
        const novaDiv = document.createElement('div');

        // 🔹 Definimos o texto que aparecerá dentro dessa nova <div>.
        novaDiv.textContent = 'Sou a nova div';

        // 🔹 Adicionamos uma classe CSS chamada 'bg-red' para estilizar a nova <div>.
        novaDiv.classList.add('bg-red');

        // 🔹 Adicionamos essa nova <div> dentro do elemento HTML referenciado por `elRef`.
        elRef.nativeElement.appendChild(novaDiv);
    }
}

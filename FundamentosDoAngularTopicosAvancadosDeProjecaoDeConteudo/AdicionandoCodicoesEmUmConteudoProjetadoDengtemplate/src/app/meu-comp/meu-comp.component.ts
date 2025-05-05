import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-comp',
  imports: [],
  templateUrl: './meu-comp.component.html',
  styleUrl: './meu-comp.component.scss'
})
export class MeuCompComponent implements OnInit {
  ngOnInit(): void {
    // Método executado automaticamente quando o componente é criado.
    console.log('MeuCompComponent OnInit')
    // Escreve no console uma mensagem indicando que o componente foi inicializado.
  }
}

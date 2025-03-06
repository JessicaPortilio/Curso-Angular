import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-comp',
  imports: [],
  templateUrl: './meu-comp.component.html',
  styleUrl: './meu-comp.component.scss'
})
export class MeuCompComponent implements OnInit {
  ngOnInit() {
    console.log('MeuCompComponentOnInit')
  }
}

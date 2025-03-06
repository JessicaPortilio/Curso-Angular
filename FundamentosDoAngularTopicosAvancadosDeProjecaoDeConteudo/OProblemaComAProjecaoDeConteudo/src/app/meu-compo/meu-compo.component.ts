import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-compo',
  imports: [],
  templateUrl: './meu-compo.component.html',
  styleUrl: './meu-compo.component.scss'
})
export class MeuCompoComponent implements OnInit {
  ngOnInit(): void {
    console.log('MeuCompoComponent')
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directivers/highlight.directive';

@Component({
  selector: 'app-com-diretiva',
  imports: [CommonModule, FormsModule, HighlightDirective],
  templateUrl: './com-diretiva.component.html',
  styleUrl: './com-diretiva.component.scss'
})
export class ComDiretivaComponent {

}

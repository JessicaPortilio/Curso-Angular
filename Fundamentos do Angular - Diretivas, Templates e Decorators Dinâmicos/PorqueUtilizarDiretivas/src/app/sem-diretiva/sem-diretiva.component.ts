import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sem-diretiva',
  imports: [CommonModule, FormsModule],
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  addBgColor: boolean = false
  onMouseOver() {
    this.addBgColor = true
  }
  onMouseOut() {
    this.addBgColor = false
  }
}

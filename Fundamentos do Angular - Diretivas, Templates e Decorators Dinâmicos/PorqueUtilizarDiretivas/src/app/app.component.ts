import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SemDiretivaComponent } from "./sem-diretiva/sem-diretiva.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, SemDiretivaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

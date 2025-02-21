import { Component } from '@angular/core';
import { ContainerBaseComponent } from "./container-base/container-base.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ContainerBaseComponent, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ProjetoCards';
}

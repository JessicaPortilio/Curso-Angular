import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BalanceCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

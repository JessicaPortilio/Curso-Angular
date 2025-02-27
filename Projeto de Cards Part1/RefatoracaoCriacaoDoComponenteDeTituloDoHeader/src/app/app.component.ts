import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientInfosCardComponent } from './components/client-infos-card/client-infos-card.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BalanceCardComponent, CreditCardComponent, DebitCardComponent, ClientInfosCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}

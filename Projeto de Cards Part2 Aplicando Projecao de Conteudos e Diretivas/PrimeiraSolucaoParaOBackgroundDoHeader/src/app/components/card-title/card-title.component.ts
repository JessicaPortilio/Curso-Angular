import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-title',
  imports: [],
  templateUrl: './card-title.component.html',
  styleUrl: './card-title.component.scss'
})
export class CardTitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) icon: string = '';
}

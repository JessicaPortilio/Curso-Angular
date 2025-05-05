import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  // Permite que outro componente envie um template (headerTemplate) 
  // para ser exibido no cabeçalho.
  @Input({required: true}) header!: TemplateRef<any>;
  // Permite receber o template de conteúdo (contentTemplate).
  @Input({required: true}) content!: TemplateRef<any>;
  // Permite receber o template de rodapé (footerTemplate).
  @Input() footer!: TemplateRef<any>;
}

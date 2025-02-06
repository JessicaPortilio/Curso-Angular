import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComDiretivaComponent } from "./com-diretiva/com-diretiva.component";
import { DisabledDirectiveDirective } from './directivers/disabled-directive.directive';
import { StyleDirective } from './directivers/style.directive';
import { ClassDirective } from './directivers/class.directive';
import { ListenerDirectiveDirective } from './directivers/listener-directive.directive';
import { InputBackgroundDirective } from './directivers/input-background.directive';



@Component({
  selector: 'app-root',
  imports: [CommonModule, 
            FormsModule, 
            ComDiretivaComponent, 
            DisabledDirectiveDirective, 
            StyleDirective, 
            ClassDirective, 
            ListenerDirectiveDirective,
            InputBackgroundDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appBgColor = 'green';
}

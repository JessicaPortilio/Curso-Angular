import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';


@Component({
  selector: 'app-filter',
  imports: [AngularMaterialModule, ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  foods= [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}

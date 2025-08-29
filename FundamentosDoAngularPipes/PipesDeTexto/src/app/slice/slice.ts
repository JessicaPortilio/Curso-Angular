import { CommonModule, SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slice',
  imports: [SlicePipe, CommonModule],
  templateUrl: './slice.html',
  styleUrl: './slice.scss'
})
export class Slice {

}

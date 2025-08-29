import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  imports: [JsonPipe],
  templateUrl: './json.html',
  styleUrl: './json.scss'
})
export class Json {

}

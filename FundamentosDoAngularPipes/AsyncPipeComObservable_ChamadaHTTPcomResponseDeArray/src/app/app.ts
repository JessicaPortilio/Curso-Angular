import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObsComArray } from "../components/obs-com-array/obs-com-array";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObsComArray],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AsyncPipeComObservable_ChamadaHTTPcomResponseDeArray';
}

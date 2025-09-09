import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ObsComObjeto } from "./components/obs-com-objeto/obs-com-objeto";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ObsComObjeto, ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'AsyncPipeComObsevable_ChamadaHTTPcomResponseDeObjeto';
}

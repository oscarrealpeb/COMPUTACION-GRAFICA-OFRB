import { Component } from '@angular/core';
import { Parte2Component } from './parte2/parte2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Parte2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}

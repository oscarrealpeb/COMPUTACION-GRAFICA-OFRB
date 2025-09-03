import { Component } from '@angular/core';
import { ContenedorComponent } from '../components/contenedor/contenedor.component';

@Component({
  selector: 'app-parte2',
  standalone: true,
  imports: [ContenedorComponent],
  templateUrl: './parte2.component.html',
  styleUrls: ['./parte2.component.css']
})
export class Parte2Component {}

import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ContenidoComponent } from '../contenido/contenido.component';
import { FooterComponent } from '../footer/footer.component';
import { Footer1Component } from '../footer1/footer1.component';
import { Footer2Component } from '../footer2/footer2.component';
import { Footer3Component } from '../footer3/footer3.component';

@Component({
  selector: 'app-contenedor',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    ContenidoComponent,
    FooterComponent,
    Footer1Component, Footer2Component, Footer3Component
  ],
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.css']
})
export class ContenedorComponent {}

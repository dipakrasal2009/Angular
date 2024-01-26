import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,DemoComponent],
  template: `<app-demo></app-demo>

  <router-outlet></router-outlet>
  `,
  //styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EventBinding';
}

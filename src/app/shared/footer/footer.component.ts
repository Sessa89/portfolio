import { Component } from '@angular/core';
import { AnimatedButtonComponent } from '../animated-button/animated-button.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AnimatedButtonComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

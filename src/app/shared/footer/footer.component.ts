import { Component } from '@angular/core';
import { AnimatedButtonComponent } from '../animated-button/animated-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [AnimatedButtonComponent, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
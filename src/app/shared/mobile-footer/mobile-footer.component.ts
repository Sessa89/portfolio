import { Component } from '@angular/core';
import { AnimatedButtonComponent } from '../animated-button/animated-button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-footer',
  standalone: true,
  imports: [AnimatedButtonComponent, TranslateModule],
  templateUrl: './mobile-footer.component.html',
  styleUrl: './mobile-footer.component.scss'
})
export class MobileFooterComponent {

}

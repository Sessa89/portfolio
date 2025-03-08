import { Component } from '@angular/core';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [AnimatedSubheadingComponent, ButtonComponent, TranslateModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}
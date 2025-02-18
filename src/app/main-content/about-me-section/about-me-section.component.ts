import { Component } from '@angular/core';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [AnimatedSubheadingComponent, ButtonComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, TranslateModule],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss'
})
export class ReferencesSectionComponent {

}

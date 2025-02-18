import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';

@Component({
  selector: 'app-references-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.scss'
})
export class ReferencesSectionComponent {

}

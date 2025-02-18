import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-subheading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-subheading.component.html',
  styleUrl: './animated-subheading.component.scss'
})
export class AnimatedSubheadingComponent {
  @Input() text: string = '';
  @Input() animationType: 'left-to-right' | 'center-out' = 'left-to-right';
  @Input() animationFile: string = '';
}

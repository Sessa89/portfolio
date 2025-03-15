import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-animated-subheading',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './animated-subheading.component.html',
  styleUrl: './animated-subheading.component.scss'
})
export class AnimatedSubheadingComponent {
  @Input() text: string = '';
  @Input() animationType: 'left-to-right' | 'left-to-right-changed' | 'center-out' = 'left-to-right';
  @Input() animationFile: string = '';
}

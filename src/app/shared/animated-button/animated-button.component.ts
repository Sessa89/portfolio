import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-animated-button',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './animated-button.component.html',
  styleUrl: './animated-button.component.scss'
})
export class AnimatedButtonComponent {
  @Input() text?: string;
  @Input() hoverText?: string;
  @Input() icon?: string;
  @Input() link?: string;
}

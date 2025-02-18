import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animated-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated-button.component.html',
  styleUrl: './animated-button.component.scss'
})
export class AnimatedButtonComponent {
  @Input() text: string = 'Button';
  @Input() hoverText?: string;
  @Input() icon?: string;
  @Input() link?: string;
}

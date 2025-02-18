import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() link: string | null = null;
  @Input() target: string = '_self';
  @Input() textColor: string = '#F8F9FA';
  @Input() borderColor: string = '#F8F9FA';
}

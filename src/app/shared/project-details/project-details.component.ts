import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AnimatedSubheadingComponent } from '../animated-subheading/animated-subheading.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AnimatedSubheadingComponent, ButtonComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {

}

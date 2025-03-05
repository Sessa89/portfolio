import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { AnimatedButtonComponent } from '../../shared/animated-button/animated-button.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AnimatedButtonComponent, ButtonComponent, TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

}
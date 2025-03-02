import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';
import { AnimatedButtonComponent } from '../../shared/animated-button/animated-button.component';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, FormsModule, FooterComponent, AnimatedButtonComponent, ButtonComponent],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit(ngForm: NgForm) {

  }

}

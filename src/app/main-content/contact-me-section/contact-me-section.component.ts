import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from '../../shared/footer/footer.component';
import { ButtonComponent } from '../../shared/button/button.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-me-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, FormsModule, FooterComponent, ButtonComponent, TranslateModule],
  templateUrl: './contact-me-section.component.html',
  styleUrl: './contact-me-section.component.scss'
})
export class ContactMeSectionComponent {
  private http = inject(HttpClient);

  privacyPolicyChecked = false;
  messageSent = signal(false);
  showPrivacyWarning = signal(false);
  emailFocused = signal(false);

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  post = {
    endPoint: 'https://philip-baumgaertner.net/sendMail.php',      // HIER: eigene Domain eintragen
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!this.validatePrivacyPolicy()) {
      return;
    }

    if (ngForm.form.valid) {
      this.messageSent.set(true);
      document.body.classList.add('no-scroll');
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => { this.messageSent.set(true) },
        });
    }
  }

  validatePrivacyPolicy(): boolean {
    if (!this.privacyPolicyChecked) {
      this.showPrivacyWarning.set(true);
      return false;
    } else {
      this.showPrivacyWarning.set(false);
      return true;
    }
  }

  closeDialog(ngForm: NgForm) {
    this.messageSent.set(false);
    document.body.classList.remove('no-scroll');
    ngForm.resetForm();
  }
}

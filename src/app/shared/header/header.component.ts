import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isEnglishActive: boolean = true;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('language');
    this.isEnglishActive = savedLanguage !== 'DE';
    this.translate.use(this.isEnglishActive ? 'en' : 'de');
  }

  toggleLanguage(language: 'EN' | 'DE'): void {
    this.isEnglishActive = language === 'EN';
    localStorage.setItem('language', language);

    this.translate.use(this.isEnglishActive ? 'en' : 'de');

    const enButton = document.getElementById('lang-en');
    const deButton = document.getElementById('lang-de');
    const toggleSwitch = document.querySelector('.language-toggle-switch');

    if (enButton && deButton && toggleSwitch) {
      if (this.isEnglishActive) {
        enButton.classList.add('active');
        deButton.classList.remove('active');
        toggleSwitch.classList.remove('active');
      } else {
        enButton.classList.remove('active');
        deButton.classList.add('active');
        toggleSwitch.classList.add('active');
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isEnglishActive: boolean = true;

  ngOnInit(): void {
    const savedLanguage = localStorage.getItem('language');
    this.isEnglishActive = savedLanguage !== 'DE';
  }

  toggleLanguage(language: 'EN' | 'DE'): void {
    this.isEnglishActive = language === 'EN';

    localStorage.setItem('language', language);

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

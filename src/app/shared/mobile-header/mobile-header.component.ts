import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mobile-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './mobile-header.component.html',
  styleUrl: './mobile-header.component.scss'
})
export class MobileHeaderComponent implements OnInit {
  isEnglishActive: boolean = true;
  isBurgerMenuOpen: boolean = false;
  burgerMenuInactiveSrc: string = './../../../assets/img/hero/mobile-header/burger-menu_inactive.png';
  burgerMenuActiveSrc: string = './../../../assets/img/hero/mobile-header/burger-menu_active.png';

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

  toggleBurgerMenu(): void {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }

  hoverBurgerMenu(): void {
    this.burgerMenuInactiveSrc = './../../../assets/img/hero/mobile-header/burger-menu_inactive-hover.png';
    this.burgerMenuActiveSrc = './../../../assets/img/hero/mobile-header/burger-menu_active-hover.png';
  }

  unhoverBurgerMenu(): void {
    this.burgerMenuInactiveSrc = './../../../assets/img/hero/mobile-header/burger-menu_inactive.png';
    this.burgerMenuActiveSrc = './../../../assets/img/hero/mobile-header/burger-menu_active.png';
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/header/header.component';
import { AnimatedButtonComponent } from '../../shared/animated-button/animated-button.component';
import { ButtonComponent } from '../../shared/button/button.component';


@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AnimatedButtonComponent, ButtonComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  /*
  const translations = {
    en: "Frontend DEVELOPER",
    de: "Frontend ENTWICKLER"
  };
  
  function updateTitle(language) {
  const titleContainer = document.querySelector(".developer-title");
  titleContainer.innerHTML = "";

  const text = translations[language].split("");

  text.forEach(char => {
    const span = document.createElement("span");
    if (char === " ") {
      span.classList.add("spacer");
    } else {
      span.textContent = char;
    }
    titleContainer.appendChild(span);
  });
  }

  document.getElementById("language-toggle").addEventListener("click", function () {
    const newLang = this.getAttribute("data-active") === "en" ? "de" : "en";
    this.setAttribute("data-active", newLang);
    updateTitle(newLang);
  });


  updateTitle("en");
  */





}

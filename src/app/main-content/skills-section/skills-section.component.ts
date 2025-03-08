import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, TranslateModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent implements AfterViewInit {

  @ViewChild('stickerPeel') stickerPeel!: ElementRef;

  private categorizedSkillIcons = [
    {
      category: 'frontend',
      enabled: true,
      skillIcons: [
        { name: 'HTML', src: 'Property 1=HTML.svg', enabled: true },
        { name: 'CSS', src: 'Property 1=CSS.svg', enabled: true },
        { name: 'JavaScript', src: 'Property 1=Js.svg', enabled: true },
        { name: 'TypeScript', src: 'Property 1=Ts.svg', enabled: true },
        { name: 'Angular', src: 'Property 1=Angular.svg', enabled: true },
        { name: 'Firebase', src: 'Property 1=Firebase.svg', enabled: true },
        { name: 'Git', src: 'Property 1=Git.svg', enabled: true },
        { name: 'Rest-Api', src: 'Property 1=Rest-Api.svg', enabled: true },
        { name: 'Scrum', src: 'Property 1=Scrum.svg', enabled: true },
        { name: 'Material Design', src: 'Property 1=Material Design.svg', enabled: true },
        { name: 'Vue.js', src: 'Property 1=Vue.Js.svg', enabled: false }
      ]
    },
    {
      category: 'backend',
      enabled: false,
      skillIcons: [
        { name: 'Python', src: 'Python.svg', enabled: false },
        { name: 'Django', src: 'Django.svg', enabled: false },
        { name: 'Linux', src: 'Linux.svg', enabled: false },
        { name: 'Redis', src: 'Redis.svg', enabled: false },
        { name: 'Flask', src: 'Flask.svg', enabled: false },
        { name: 'PostgreSQL', src: 'PostgreSQL.svg', enabled: false },
        { name: 'Heroku', src: 'Heroku.svg', enabled: false },
        { name: 'SQL', src: 'SQL.svg', enabled: false },
        { name: 'Docker', src: 'Docker.svg', enabled: false },
        { name: 'Cloud', src: 'Cloud.svg', enabled: false },
        { name: 'Rx.js', src: 'RxJs.svg', enabled: false }
      ]
    },
    {
      category: 'devsecops',
      enabled: false,
      skillIcons: [
        { name: 'Shell-Scripting', src: 'Shell-Scripting.svg', enabled: false },
        { name: 'YAML', src: 'YAML.svg', enabled: false },
        { name: 'DRF', src: 'DRF.svg', enabled: false },
        { name: 'CI/CD', src: 'CD.svg', enabled: false },
        { name: 'Icons s2', src: 'Icons s2.svg', enabled: false }
      ]
    }
  ];

  skillIcons = this.categorizedSkillIcons
    .filter(category => category.enabled)
    .flatMap(category =>
      category.skillIcons
        .filter(skillIcon => skillIcon.enabled)
        .map(skillIcon => ({ ...skillIcon, category: category.category }))
    );

  getSkillIconPath(icon: string, category: string): string {
    return `assets/img/skills/${category}/${icon}`;
  }

  ngAfterViewInit(): void {
    new Peel(this.stickerPeel.nativeElement);
  }
}

class Peel {
  private top: HTMLElement;
  private bottom: HTMLElement;

  private isDragging = false;
  private lastX = 0;
  private lastY = 0;

  private cumulativeRotationX = 0;
  private cumulativeRotationY = 0;

  private MAX_ANGLE = 120;
  private REMOVE_THRESHOLD = 80;

  constructor(private container: HTMLElement) {
    this.top = this.container.querySelector('.sticker-container_top') as HTMLElement;
    this.bottom = this.container.querySelector('.sticker-container_bottom') as HTMLElement;

    this.addEventListeners();
  }

  private addEventListeners() {
    this.container.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());

    this.container.addEventListener('touchstart', (e) => this.onTouchStart(e), { passive: false });
    window.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: false });
    window.addEventListener('touchend', () => this.onTouchEnd());
  }

  private onMouseDown(e: MouseEvent) {
    this.isDragging = true;
    this.lastX = e.clientX;
    this.lastY = e.clientY;
  }

  private onMouseMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();

    const dx = e.clientX - this.lastX;
    const dy = e.clientY - this.lastY;

    this.lastX = e.clientX;
    this.lastY = e.clientY;

    this.setPeelPosition(dx, dy);
  }

  private onMouseUp() {
    this.isDragging = false;
    this.checkRemoval();
  }

  private onTouchStart(e: TouchEvent) {
    this.isDragging = true;
    const t = e.touches[0];
    this.lastX = t.clientX;
    this.lastY = t.clientY;
  }

  private onTouchMove(e: TouchEvent) {
    if (!this.isDragging) return;
    e.preventDefault();

    const t = e.touches[0];
    const dx = t.clientX - this.lastX;
    const dy = t.clientY - this.lastY;

    this.lastX = t.clientX;
    this.lastY = t.clientY;

    this.setPeelPosition(dx, dy);
  }

  private onTouchEnd() {
    this.isDragging = false;
    this.checkRemoval();
  }

  private setPeelPosition(dx: number, dy: number) {
    const rotateXDelta = -dy * 0.5;
    const rotateYDelta = dx * 0.5;

    this.cumulativeRotationX += rotateXDelta;
    this.cumulativeRotationY += rotateYDelta;

    if (this.cumulativeRotationX > this.MAX_ANGLE) this.cumulativeRotationX = this.MAX_ANGLE;
    if (this.cumulativeRotationX < -this.MAX_ANGLE) this.cumulativeRotationX = -this.MAX_ANGLE;
    if (this.cumulativeRotationY > this.MAX_ANGLE) this.cumulativeRotationY = this.MAX_ANGLE;
    if (this.cumulativeRotationY < -this.MAX_ANGLE) this.cumulativeRotationY = -this.MAX_ANGLE;

    this.top.style.transform = `rotateX(${this.cumulativeRotationX}deg) rotateY(${this.cumulativeRotationY}deg)`;
  }

  private checkRemoval() {
    const distance = Math.sqrt(
      this.cumulativeRotationX * this.cumulativeRotationX +
      this.cumulativeRotationY * this.cumulativeRotationY
    );

    if (distance > this.REMOVE_THRESHOLD) {
      this.top.style.transition = 'opacity 0.5s ease';
      this.top.style.opacity = '0';

      setTimeout(() => {
        this.top.style.display = 'none';
      }, 500);
    }
  }
}
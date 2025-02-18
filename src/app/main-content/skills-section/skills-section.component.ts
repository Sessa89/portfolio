import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {
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
        { name: 'Vue.js', src: 'Property 1=Vue.Js.svg', enabled: true }
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
}

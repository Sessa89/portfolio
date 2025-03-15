import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { ProjectComponent } from '../../shared/project/project.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, ProjectComponent, TranslateModule],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {
  private skillIcons: Record<string, string> = {
    HTML: 'assets/img/skills/frontend/Property 1=HTML.svg',
    CSS: 'assets/img/skills/frontend/Property 1=CSS.svg',
    JavaScript: 'assets/img/skills/frontend/Property 1=Js.svg',
    TypeScript: 'assets/img/skills/frontend/Property 1=Ts.svg',
    Angular: 'assets/img/skills/frontend/Property 1=Angular.svg',
    Firebase: 'assets/img/skills/frontend/Property 1=Firebase.svg',
    Git: 'assets/img/skills/frontend/Property 1=Git.svg',
    'Rest-Api': 'assets/img/skills/frontend/Property 1=Rest-Api.svg',
    Scrum: 'assets/img/skills/frontend/Property 1=Scrum.svg',
    MaterialDesign: 'assets/img/skills/frontend/Property 1=Material Design.svg',
    'Vue.Js': 'assets/img/skills/frontend/Property 1=Vue.Js.svg',

    Python: 'assets/img/skills/backend/Python.svg',
    Django: 'assets/img/skills/backend/Django.svg',
    Linux: 'assets/img/skills/backend/Linux.svg',
    Redis: 'assets/img/skills/backend/Redis.svg',
    Flask: 'assets/img/skills/backend/Flask.svg',
    PostgreSQL: 'assets/img/skills/backend/PostgreSQL.svg',
    Heroku: 'assets/img/skills/backend/Heroku.svg',
    SQL: 'assets/img/skills/backend/SQL.svg',
    Docker: 'assets/img/skills/backend/Docker.svg',
    Cloud: 'assets/img/skills/backend/Cloud.svg',
    RxJs: 'assets/img/skills/backend/RxJs.svg',

    'Shell-Scripting': 'assets/img/skills/devsecops/Shell-Scripting.svg',
    YAML: 'assets/img/skills/devsecops/YAML.svg',
    DRF: 'assets/img/skills/devsecops/DRF.svg',
    'CI/CD': 'assets/img/skills/devsecops/CD.svg',
    'Icons-s2': 'assets/img/skills/devsecops/Icons s2.svg',
  };

  private projectList = [
    {
      category: 'frontend',
      enabled: true,
      projects: [
        {
          path: 'join',
          name: 'Join',
          description: 'projects.join.description',
          implementationDetails: 'projects.join.implementationDetails',
          projectType: 'projects.join.projectType',
          image: 'laptop_join.png',
          skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
          gitHubLink: 'https://github.com/DanielWoytitzki/join-project',
          liveTestLink: 'https://philip-baumgaertner.net/join',
        },
        {
          path: 'el-pollo-loco',
          name: 'El Pollo Loco',
          description: 'projects.el-pollo-loco.description',
          implementationDetails: 'projects.el-pollo-loco.implementationDetails',
          projectType: 'projects.el-pollo-loco.projectType',
          image: 'el_pollo_loco.png',
          skills: ['HTML', 'CSS', 'JavaScript'],
          gitHubLink: 'https://github.com/Sessa89/El-Pollo-Loco',
          liveTestLink: 'https://philip-baumgaertner.net/el-pollo-loco',
        }
      ]
    },
    {
      category: 'backend',
      enabled: false,
      projects: [
        {
          path: 'api-service',
          name: 'API Service',
          description: 'projects.api-service.description',
          implementationDetails: 'projects.api-service.implementationDetails',
          projectType: '3 weeks',
          image: 'api-service.png',
          skills: ['Node.js', 'Express', 'MongoDB'],
          gitHubLink: '',
          liveTestLink: '',
        }
      ]
    }
  ];

  projects = this.projectList
    .filter(category => category.enabled)
    .flatMap(category =>
      category.projects.map(project => ({
        ...project,
        category: category.category,
        skills: project.skills.map(skill => ({
          skillName: skill,
          skillIcon: this.skillIcons[skill] || ''
        }))
       }))
    );

  getProjectImagePath(image: string, category: string): string {
    return `assets/img/projects/${category}/${image}`;
  }
}
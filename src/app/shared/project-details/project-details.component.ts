import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { AnimatedSubheadingComponent } from '../animated-subheading/animated-subheading.component';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MobileHeaderComponent, AnimatedSubheadingComponent, ButtonComponent, TranslateModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project: any;

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
          path: 'pokedex',
          name: 'Pokédex',
          description: 'projects.pokedex.description',
          implementationDetails: 'projects.pokedex.implementationDetails',
          projectType: 'projects.pokedex.projectType',
          skills: ['HTML', 'CSS', 'JavaScript', 'Rest-Api'],
          image: 'pokedex.png',
          gitHubLink: '',
          liveTestLink: 'https://philip-baumgaertner.net/pokedex',
        },
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
        },
        {
          path: 'dabubble',
          name: 'DABubble',
          description: 'projects.dabubble.description',
          implementationDetails: 'projects.dabubble.implementationDetails',
          projectType: 'projects.dabubble.projectType',
          image: 'dabubble.png',
          skills: ['HTML', 'CSS', 'JavaScript'],
          gitHubLink: '',
          liveTestLink: 'https://philip-baumgaertner.net/dabubble',
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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const projectPath = paramMap.get('projectPath');
      if (!projectPath) {
        return;
      }

      for (const category of this.projectList) {
        const foundProject = category.projects.find((p: any) => p.path === projectPath);
        if (foundProject) {
          this.project = {
            ...foundProject,
            category: category.category,
            skills: foundProject.skills.map((skill: string) => ({
              skillName: skill,
              skillIcon: this.skillIcons[skill] || ''
            }))
           };
          break;
        }
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  goToNextProject(): void {
    const activeProjects = this.projectList.reduce((activeProject: any[], category: any) => {
      if (category.enabled) {
        return activeProject.concat(category.projects.map((p: any) => ({ ...p, category: category.category })));
      }
      return activeProject;
    }, []);

    const currentIndex = activeProjects.findIndex((p: any) => p.path === this.project.path);
    if (currentIndex === -1) {
      return;
    }

    let nextIndex = currentIndex + 1;
    if (nextIndex >= activeProjects.length) {
      nextIndex = 0;
    }
    const nextProject = activeProjects[nextIndex];

    this.router.navigate(['/projects', nextProject.path]);
  }
}
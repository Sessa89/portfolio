import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AnimatedSubheadingComponent } from '../animated-subheading/animated-subheading.component';
import { ButtonComponent } from '../button/button.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AnimatedSubheadingComponent, ButtonComponent],
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
          description: 'Pokédex is an app that allows users to search and filter Pokémon with real-time API data.',
          implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
          duration: '3 weeks',
          skills: ['HTML', 'CSS', 'JavaScript', 'Rest-Api'],
          image: 'pokedex.png',
          gitHubLink: '',
          liveTestLink: '',
        },
        {
          path: 'join',
          name: 'Join',
          description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
          duration: '3 weeks',
          image: 'join.png',
          skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
          gitHubLink: 'https://github.com/DanielWoytitzki/join-project',
          liveTestLink: '',
        },
        {
          path: 'el-pollo-loco',
          name: 'El Pollo Loco',
          description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
          duration: '3 weeks',
          image: 'el_pollo_loco.png',
          skills: ['HTML', 'CSS', 'JavaScript', 'OOP'],
          gitHubLink: 'https://github.com/Sessa89/El-Pollo-Loco',
          liveTestLink: '',
        },
        {
          path: 'dabubble',
          name: 'DABubble',
          description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization..',
          implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
          duration: '3 weeks',
          image: 'dabubble.png',
          skills: ['HTML', 'CSS', 'JavaScript', 'OOP'],
          gitHubLink: '',
          liveTestLink: '',
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
          description: 'A RESTful API service built with Node.js and Express for managing user authentication and data processing.',
          implementationDetails: 'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
          duration: '3 weeks',
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
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedSubheadingComponent } from '../../shared/animated-subheading/animated-subheading.component';
import { ProjectComponent } from '../../shared/project/project.component';

@Component({
  selector: 'app-my-projects-section',
  standalone: true,
  imports: [CommonModule, AnimatedSubheadingComponent, ProjectComponent],
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {
  private projectList = [
    {
      category: 'frontend',
      enabled: true,
      projects: [
        {
          name: 'Pokédex',
          description: 'Pokédex is an app that allows users to search and filter Pokémon with real-time API data.',
          image: 'pokedex.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Rest-Api'],
          detailsRoute: '/projects/pokedex'
        },
        {
          name: 'Join',
          description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
          image: 'join.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
          detailsRoute: '/projects/join'
        },
        {
          name: 'El Pollo Loco',
          description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
          image: 'el_pollo_loco.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'OOP'],
          detailsRoute: '/projects/el-pollo-loco'
        },
        {
          name: 'DABubble',
          description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization..',
          image: 'dabubble.png',
          technologies: ['HTML', 'CSS', 'JavaScript', 'OOP'],
          detailsRoute: '/projects/dabubble'
        }
      ]
    },
    {
      category: 'backend',
      enabled: false,
      projects: [
        {
          name: 'API Service',
          description: 'A RESTful API service built with Node.js and Express for managing user authentication and data processing.',
          image: 'api-service.png',
          technologies: ['Node.js', 'Express', 'MongoDB'],
          detailsRoute: '/projects/api-service'
        }
      ]
    }
  ];

  projects = this.projectList
    .filter(category => category.enabled)
    .flatMap(category =>
      category.projects.map(project => ({ ...project, category: category.category }))
    );

  getProjectImagePath(image: string, category: string): string {
    return `assets/img/projects/${category}/${image}`;
  }
}

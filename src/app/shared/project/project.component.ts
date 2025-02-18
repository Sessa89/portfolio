import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() name!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() technologies!: string[];
  @Input() detailsRoute!: string;

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate([this.detailsRoute]);
  }
}

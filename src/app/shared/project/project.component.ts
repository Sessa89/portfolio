import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
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

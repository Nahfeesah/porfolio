import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  project = "assets/project.png"
  project1 = "assets/project1.png"
  project2 = "assets/Tech4dev-project.png"
  techList = ['HTML','CSS','JavaScript']
}

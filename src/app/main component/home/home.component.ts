import { CommonModule } from '@angular/common';
import { Component, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements PipeTransform{
  heroImg = "assets/hero2.jpeg";
  myName: string = "Ibrahim Nofisat"
  title = "Front-end & Mobile app Developer"
  transform(value: any, ...args: any[]) {
    
  }
}

import { Component, OnInit, PipeTransform } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AboutComponent } from './main component/about/about.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './main component/home/home.component';
import { ProjectComponent } from './main component/project/project.component';
import { NavbarComponent} from '../app/smaller component/navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HomeComponent, AboutComponent, CommonModule, ProjectComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements PipeTransform {
  logo = "assets/_Nafeesah.png"
  heroImg = "assets/hero2.jpeg";
  myName: string = "Ibrahim Nofisat"
  title = "Front-end & Mobile app Developer"

  transform(value: any, ...args: any[]) {

  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}

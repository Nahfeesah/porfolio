import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { animate, style, transition, trigger, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [
    trigger('staggeredFade', [
      transition(':enter', [
        query('.skill', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class AboutComponent {
  viewMode = ""
  picture1 = "assets/picture.jpg"
  cerf1 = "assets/queen-of-web.jpg"
  cerf2 = "assets/Tech4dev.png"
  cerf3 = "assets/alx-ai.png"
  myName: string = "Ibrahim Nofisat Omobolanle"

}

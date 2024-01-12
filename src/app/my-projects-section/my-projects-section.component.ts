import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects-section',
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {
  openWeb(projectLink:string){
    window.open(projectLink, '_blank');
  }
}

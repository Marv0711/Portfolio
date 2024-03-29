import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-projects-section',
  templateUrl: './my-projects-section.component.html',
  styleUrl: './my-projects-section.component.scss'
})
export class MyProjectsSectionComponent {
  openWeb(projectLink:string){
    window.open(projectLink, '_blank');
  }

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let currentScroll = window.scrollY;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (currentScroll / totalHeight) * 100;
    let thresholdPercentage = 35;
  
    if (scrollPercentage >= thresholdPercentage) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }
}


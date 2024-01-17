import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  scrolled = 0;

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let currentScroll = window.scrollY;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (currentScroll / totalHeight) * 100;
    let thresholdPercentage = 2;
  
    if (scrollPercentage >= thresholdPercentage) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }
}

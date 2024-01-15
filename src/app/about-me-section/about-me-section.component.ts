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
    let numb = window.scrollY;

    if (numb >= 100) {
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}

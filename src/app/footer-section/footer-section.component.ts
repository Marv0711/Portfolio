import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer-section',
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
  constructor(private router: Router) {}

  up(){
    window.scrollTo(0, 0);
  }

  backToLandingPage(){
    this.router.navigateByUrl('/policy');
  }

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let numb = window.scrollY;
    if (numb >= 2100){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}

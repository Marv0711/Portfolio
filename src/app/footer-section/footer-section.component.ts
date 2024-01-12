import { Component } from '@angular/core';
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
}

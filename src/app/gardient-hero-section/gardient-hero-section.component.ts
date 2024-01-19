import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gardient-hero-section',
  templateUrl: './gardient-hero-section.component.html',
  styleUrl: './gardient-hero-section.component.scss'
})
export class GardientHeroSectionComponent {

  public toContact() {
    window.location.href = window.location.pathname + '#contact';
  }
}

import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gardient-hero-section',
  templateUrl: './gardient-hero-section.component.html',
  styleUrl: './gardient-hero-section.component.scss'
})
export class GardientHeroSectionComponent {
  constructor(public translate: TranslateService) { }

  public toContact() {
    window.location.href = window.location.pathname + '#contact';
  }
}

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  activeSection: string = '';

  constructor(public translate: TranslateService) {
    
  }

  activButton(section: string): void {
    this.activeSection = section;
  }

  up(){
    window.scrollTo(0, 0);
  }

  openMenu(){
    let menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }
}

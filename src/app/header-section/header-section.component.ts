import { Component } from '@angular/core';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  activeSection: string = '';


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

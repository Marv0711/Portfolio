import { Component, HostListener, Injectable, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrl: './my-skills-section.component.scss'
})

export class MySkillsSectionComponent {

  scrolled:number = 0;

  constructor(public translate: TranslateService){}

  toContact(){
    window.location.href = window.location.pathname + '#contact';
  }

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let numb = window.scrollY;
    if (numb >= 1200){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}

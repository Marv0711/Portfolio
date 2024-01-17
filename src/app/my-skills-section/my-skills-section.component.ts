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
    let currentScroll = window.scrollY;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (currentScroll / totalHeight) * 100;
    let thresholdPercentage = 19;
  
    if (scrollPercentage >= thresholdPercentage) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }
}

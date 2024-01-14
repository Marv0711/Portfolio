import { Component, Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrl: './my-skills-section.component.scss'
})

export class MySkillsSectionComponent {

  @Input() german:boolean = false;

  laGerman(){
    document.getElementById('skillHeadline')?.classList.add('mobile-german')
  }
  
  laEnglish(){
    document.getElementById('skillHeadline')?.classList.remove('mobile-german')
  }

  toContact(){
    window.location.href = window.location.pathname + '#contact';
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrl: './my-skills-section.component.scss'
})
export class MySkillsSectionComponent {
  toContact(){
    window.location.href = window.location.pathname + '#contact';
  }
}

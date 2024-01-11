import { Component } from '@angular/core';
import { GardientHeroComponent } from "../gardient-hero/gardient-hero.component";

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [GardientHeroComponent],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  constructor(private hero: GardientHeroComponent){}

  toContact(){
    this.hero.toContact();
  }
}

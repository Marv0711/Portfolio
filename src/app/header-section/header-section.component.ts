import { Component, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MySkillsSectionComponent } from '../my-skills-section/my-skills-section.component';
import { BehaviorSubject } from 'rxjs';
import { ContactSectionComponent } from '../contact-section/contact-section.component';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})

export class HeaderSectionComponent {
  activeSection: string = '';
  activeSectionLanguage: string = '';

  constructor(public translate: TranslateService, private contact: ContactSectionComponent) {
    
  }

  activButton(section: string) {
    this.activeSection = section;
  }

  activButtonLanguage(section: string){
    this.activeSectionLanguage = section;
  }

  up(){
    window.scrollTo(0, 0);
  }

  openMenu(){
    let menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }

  laGerman(){
    this.contact.laGerman();
  }

  laEnglish(){
    this.contact.laEnglish();
  }
}

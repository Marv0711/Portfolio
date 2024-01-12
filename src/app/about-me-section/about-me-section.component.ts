import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss'
})
export class AboutMeSectionComponent {
  constructor(public translate: TranslateService) {
    translate.use('de')
  }
}

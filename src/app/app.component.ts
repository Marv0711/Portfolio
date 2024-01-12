import { Component, Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'my-prtfolio';

  constructor(public translate: TranslateService) {
    translate.use('en')
  }
}

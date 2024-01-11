import { Component, Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'my-prtfolio';

  constructor(public translate: TranslateService) {
     // the lang to use, if the lang isn't available, it will use the current loader to get them
}
}

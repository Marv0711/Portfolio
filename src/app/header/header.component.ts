import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from "../contact/contact.component";
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ContactComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public contact: ContactComponent, public translate: TranslateService){}



  activButton(button: MouseEvent){
    let oldButton = document.querySelectorAll('.activ-button');

    if(oldButton){
      oldButton.forEach((element) => {
        element.classList.remove('activ-button');
      });
    }

    let activButton = button.target as HTMLElement;
    activButton?.classList.add('activ-button')
  }

  up(){
    this.contact.up();
  }

  openMenu(){
    let menu = document.getElementById('menu');
    menu?.classList.toggle('open');
  }
}

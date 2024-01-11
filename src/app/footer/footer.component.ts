import { Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, ContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private contact: ContactComponent){}

  up(){
    this.contact.up();
  }
}

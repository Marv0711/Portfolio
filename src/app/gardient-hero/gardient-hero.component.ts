import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
@Injectable({
    providedIn: 'root'
  })

@Component({
    selector: 'app-gardient-hero',
    standalone: true,
    templateUrl: './gardient-hero.component.html',
    styleUrl: './gardient-hero.component.scss',
    imports: [HeaderComponent]
})
export class GardientHeroComponent {
    
    public toContact(){
        window.location.href = window.location.pathname + '#contact';
    }
}


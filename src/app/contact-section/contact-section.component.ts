import { Component, HostListener, Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  showIconName = true;
  showIconEmail = true;
  showIconMessage = true;
  nameFirstClick = false;
  EmailFirstClick = false;
  MessageFirstClick = false;
  checkboxClicked = false;
  BoxFirstClick = false

  isButtonDisabled = true;

  constructor(public translate: TranslateService, private router: Router, ) {}

  toPolicy(){
    this.router.navigateByUrl('/policy');
  }


  buttonActiv() {
    this.isButtonDisabled = !this.isButtonDisabled
  }


  checkInput(inputfield: any, showIcon: string) {
    let activInputfield = inputfield.target as HTMLInputElement;
    let isInputEmpty = activInputfield.value.length <= 0;

    switch (showIcon) {
      case 'showIconName':
        this.editNameInput(isInputEmpty);
        break;
      case 'showIconEmail':
        this.editMailInput(activInputfield);
        break;
      case 'showIconMessage':
        this.editMessageInput(isInputEmpty);
        break;
    }
    this.isButtonDisabled = !this.isButtonDisabled
    this.buttonActiv();
  }

  controlAtPosition(atIndex: number, activInputfield: HTMLInputElement) {
    if (atIndex < activInputfield.value.length - 1) {
      this.showIconEmail = false;
      this.EmailFirstClick = true;
    }
    else {
      this.showIconEmail = true;
      this.EmailFirstClick = true;
    }
  }

  editMessageInput(isInputEmpty: boolean) {
    if (isInputEmpty) {
      this.showIconMessage = isInputEmpty;
      this.MessageFirstClick = true;
    }
    else {
      this.showIconMessage = isInputEmpty;
      this.MessageFirstClick = true;
    }
  }

  editNameInput(isInputEmpty: boolean) {
    if (isInputEmpty) {
      this.showIconName = isInputEmpty;
      this.nameFirstClick = true;
    }
    else if (!isInputEmpty) {
      this.showIconName = isInputEmpty;
      this.nameFirstClick = true;
    }
  }

  editMailInput(activInputfield: HTMLInputElement) {
    if (activInputfield.value.includes('@')) {
      let atIndex = activInputfield.value.indexOf('@');
      this.controlAtPosition(atIndex, activInputfield);
    }
    else {
      this.showIconEmail = true;
      this.EmailFirstClick = true;
    }
  }

  checkBoxCklick() {
    this.BoxFirstClick = true;
    
    if (this.checkboxClicked) {
      this.checkboxClicked = false;
    }
    else {
      this.checkboxClicked = true;
    }
  }

  swapImg() {
    let picture = document.getElementById('arrow-up') as HTMLImageElement;
    picture.src = "assets/img/arrow-up-lineGreen.svg";
    picture.style.border = '2px solid var(--White, #70E61C)';
  }

  swapImgBack() {
    let picture = document.getElementById('arrow-up') as HTMLImageElement;
    picture.src = "assets/img/arrow-up-line.svg";
    picture.style.border = '2px solid var(--White, #FFF)';
  }

  public up() {
    window.scrollTo({
      top: 0,
    });
  }

  sendMessage(event:any) {
    debugger
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mrgngyqo", {
      method: "POST",
      body: new FormData(event.target),
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  laGerman(){
    let englishInputs = document.querySelectorAll('.input-english');
    englishInputs.forEach(element => {
      element.classList.add('d-none')
    });

    let germanInputs = document.querySelectorAll('.input-german');
    germanInputs.forEach(elementgerman => {
      elementgerman.classList.remove('d-none')
    });

  }

  laEnglish(){
    let englishInputs = document.querySelectorAll('.input-english');
    englishInputs.forEach(element => {
      element.classList.remove('d-none')
    });

    let germanInputs = document.querySelectorAll('.input-german');
    germanInputs.forEach(elementgerman => {
      elementgerman.classList.add('d-none')
    });
  }

  scrolled = 0;

  @HostListener('window:scroll', ['$event'])
  
  onWindowScroll() {
    let numb = window.scrollY;
    
    if (numb >= 4100){
      this.scrolled = 1;
    }
    else {
      this.scrolled = 0;
    }
  }
}

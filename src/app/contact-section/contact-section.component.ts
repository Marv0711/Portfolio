import { Component, ElementRef, HostListener, Injectable, ViewChild } from '@angular/core';
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
  isCheckboxDisabled = false;

  constructor(public translate: TranslateService, private router: Router, ) {}

  @ViewChild('myFormEnglish') myFormEnglish!: ElementRef;
  @ViewChild('myFormGerman') myFormGerman!:ElementRef

  @ViewChild('namefieldEnglish') namefieldEnglish!: ElementRef;
  @ViewChild('namefieldGerman') namefieldGerman!:ElementRef

  @ViewChild('mailfieldEnglish') mailfieldEnglish!: ElementRef;
  @ViewChild('mailfieldGerman') mailfieldGerman!:ElementRef

  @ViewChild('messagefieldEnglish') messagefieldEnglish!: ElementRef;
  @ViewChild('messagefieldGerman') messagefieldGerman!:ElementRef

  @ViewChild('buttonEnglish') buttonEnglish!: ElementRef;
  @ViewChild('buttonGerman') buttonGerman!:ElementRef


  async sendMessage() {
  // action = url

  let isGerman = this.translate.currentLang === 'de';
  console.log(isGerman ? this.myFormGerman : this.myFormEnglish);
  
  if(isGerman){
    this.setFieldState(this.namefieldGerman);
    this.setFieldState(this.mailfieldGerman);
    this.setFieldState(this.messagefieldGerman);
    this.setFieldState(this.buttonGerman);
  }
  else{
    this.setFieldState(this.namefieldEnglish);
    this.setFieldState(this.mailfieldEnglish);
    this.setFieldState(this.messagefieldEnglish);
    this.setFieldState(this.buttonEnglish);
  }

  this.isButtonDisabled = true;
  this.isCheckboxDisabled = true;

    let fd = new FormData()
    fd.append('name', '')
    fd.append('email', '')
    fd.append('message', '')
    await fetch('url',
      {
        method: 'POST',
        body: fd
      }
    )
  }

  setFieldState(field: ElementRef): void {
    if (field) {
      field.nativeElement.disabled = true;
    }
  }

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
    if(!this.isCheckboxDisabled)
    {
      this.BoxFirstClick = true;
    
      if (this.checkboxClicked) {
        this.checkboxClicked = false;
      }
      else {
        this.checkboxClicked = true;
      }
      this.buttonActiv();
    }
    else{

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

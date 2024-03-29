import { Component, ElementRef, HostListener, Injectable, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  inputfieldsDisabled = false;

  messageSend = false;

  constructor(public translate: TranslateService, private router: Router,) { }

  @ViewChild('myForm') myForm!: ElementRef;

  @ViewChild('namefield') namefield!: ElementRef;

  @ViewChild('mailfield') mailfield!: ElementRef;

  @ViewChild('messagefield') messagefield!: ElementRef;

  @ViewChild('button') button!: ElementRef;

  smallscreen = true;
  bigscreen = true;

  ngOnInit() {
    this.checkScreenSize();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  checkScreenSize(){
    if(window.innerWidth >= 1920){
      this.bigscreen = true
      this.smallscreen = false
    }
    else{
      this.smallscreen = true
      this.bigscreen = false
    }
  }

  async sendMessage() {
    this.setFieldDisabeldTrue();

    await this.mailSending();

    this.setFieldDisabeldFalse()

    this.messageSend = true;
  }

  setFieldDisabeldFalse(){
    this.setFieldState(this.namefield, false);
    this.setFieldState(this.mailfield, false);
    this.setFieldState(this.messagefield, false);
    this.setFieldState(this.button, false);
    this.isButtonDisabled = false;
    this.isCheckboxDisabled = false;
    this.inputfieldsDisabled = false;
  }

  async mailSending(){
    let namefield = this.namefield.nativeElement;
    let mailfield = this.mailfield.nativeElement;
    let messagefield = this.messagefield.nativeElement;

    let fd = new FormData()
    fd.append('name', namefield.value);
    fd.append('email', mailfield.value);
    fd.append('message', messagefield.value);
    await fetch('https://marvin-buchan.de/assets/php/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    )
    this.clearInputs(namefield, mailfield, messagefield)
  }

  clearInputs(namefield:any, mailfield:any, messagefield:any){
    namefield.value = "";
    mailfield.value = "";
    messagefield.value = "";
  }

  setFieldDisabeldTrue(){
    this.setFieldState(this.namefield, true);
    this.setFieldState(this.mailfield, true);
    this.setFieldState(this.messagefield, true);
    this.setFieldState(this.button, true);
    this.isButtonDisabled = true;
    this.isCheckboxDisabled = true;
    this.inputfieldsDisabled = true;
  }

  setFieldState(field: ElementRef, status:boolean) {
    if (field) {
      field.nativeElement.disabled = status;
    }
  }


  buttonActiv() {
    this.isButtonDisabled = !this.isButtonDisabled
    this.messageSend = false;
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
    this.messageSend = false;
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
    this.messageSend = false;
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
    this.messageSend = false;
  }

  checkBoxCklick() {
    if (!this.isCheckboxDisabled) {
      this.BoxFirstClick = true;

      if (this.checkboxClicked) {
        this.checkboxClicked = false;
      }
      else {
        this.checkboxClicked = true;
      }
      this.buttonActiv();
    }
    else {

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

  laGerman() {
    let englishInputs = document.querySelectorAll('.input-english');
    englishInputs.forEach(element => {
      element.classList.add('d-none')
    });

    let germanInputs = document.querySelectorAll('.input-german');
    germanInputs.forEach(elementgerman => {
      elementgerman.classList.remove('d-none')
    });

  }

  laEnglish() {
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
    let currentScroll = window.scrollY;
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    let scrollPercentage = (currentScroll / totalHeight) * 100;
    let thresholdPercentage = 80;
  
    if (scrollPercentage >= thresholdPercentage) {
      this.scrolled = 1;
    } else {
      this.scrolled = 0;
    }
  }
}

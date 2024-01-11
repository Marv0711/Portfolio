import { Component, Injectable, Input, OnChanges, SimpleChanges } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

@Injectable({
  providedIn: 'root'
})

export class ContactComponent {
  showIconName = true;
  showIconEmail = true;
  showIconMessage = true;
  nameFirstClick = false;
  EmailFirstClick = false;
  MessageFirstClick = false;
  checkboxClicked = false;
  BoxFirstClick = false

  isButtonDisabled = true;

  buttonActiv() {
    let button = document.getElementById('sendMessageButton');
    this.isButtonDisabled = !this.isButtonDisabled

    if (!this.isButtonDisabled && !this.showIconName && !this.showIconEmail && !this.showIconMessage) {
      button?.classList.remove('disable-design')
    }

    else if (this.isButtonDisabled || this.showIconName || this.showIconEmail || this.showIconMessage) {
      button?.classList.add('disable-design')
    }

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
      document.getElementById('input-mail')?.classList.remove('falseInput');
      document.getElementById('input-mail')?.classList.add('rightInput');
    }
    else {
      this.showIconEmail = true;
      this.EmailFirstClick = true;
      document.getElementById('input-mail')?.classList.remove('rightInput');
      document.getElementById('input-mail')?.classList.add('falseInput');
    }
  }

  editMessageInput(isInputEmpty: boolean) {
    if (isInputEmpty) {
      this.showIconMessage = isInputEmpty;
      this.MessageFirstClick = true;
      document.getElementById('input-message')?.classList.remove('rightInput');
      document.getElementById('input-message')?.classList.add('falseInput');
    }
    else {
      this.showIconMessage = isInputEmpty;
      this.MessageFirstClick = true;
      document.getElementById('input-message')?.classList.remove('falseInput');
      document.getElementById('input-message')?.classList.add('rightInput');
    }
  }

  editNameInput(isInputEmpty: boolean) {
    if (isInputEmpty) {
      this.showIconName = isInputEmpty;
      this.nameFirstClick = true;
      document.getElementById('input-name')?.classList.add('falseInput');
      document.getElementById('input-name')?.classList.remove('rightInput');
    }
    else if (!isInputEmpty) {
      this.showIconName = isInputEmpty;
      this.nameFirstClick = true;
      document.getElementById('input-name')?.classList.remove('falseInput');
      document.getElementById('input-name')?.classList.add('rightInput');
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
      document.getElementById('input-mail')?.classList.remove('rightInput');
      document.getElementById('input-mail')?.classList.add('falseInput');
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
}

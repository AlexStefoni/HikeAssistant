import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AES } from 'crypto-ts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StartPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogIn(){

  }

  goRegister(){
    this.router.navigate(['./register-tab']);
  }

  goGuest(){
    
    this.router.navigate(['./menu-user']);
    const encryptedMessage = AES.encrypt('message', 'test');
    console.log(encryptedMessage.toString());
    const decryptedMessage = AES.decrypt(encryptedMessage,'test');
    
  }
}

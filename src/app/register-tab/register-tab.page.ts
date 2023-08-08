import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import type { IonCheckbox, IonInput, IonItem, IonLabel } from '@ionic/angular';
import { DataService, Users } from '../services/data.service';

@Component({
  selector: 'app-register-tab',
  templateUrl: './register-tab.page.html',
  styleUrls: ['./register-tab.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterTabPage implements OnInit {

  
  constructor(private router: Router,private dataService: DataService) { }
  @ViewChild('ionInputUsername', { static: true }) inputUser : IonInput;
  @ViewChild('ionInputEmail', { static: true }) inputEmail : IonInput;
  @ViewChild('ionInputPass', { static: true }) inputPass : IonInput;
  @ViewChild('ionInputPass2', { static: true }) inputPass2 : IonInput;
  @ViewChild('ionCheckAdmin', { static: true }) adminCheck : IonCheckbox;
  //@ViewChild('ErrorMsg', { static: true }) ErrorMsg : IonItem

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./start-page']);
  }
  checkEvent(){

  }
 
  async saveButton(){
    
    
    console.log(this.inputUser.value);
    console.log(this.inputEmail.value);
    console.log(this.inputPass.value);
    console.log(this.inputPass2.value);
    console.log(this.adminCheck.checked);
    
    //this.dataService.addUser({ email :  this.inputEmail.value  , user_id : this.inputUser.value ,user_pass : this.inputPass.value, user_type : this.adminCheck.checked});
    this.inputUser.value="";
    
    this.adminCheck.checked=false;
    this.router.navigate(['./start-page']);
    
  }
}

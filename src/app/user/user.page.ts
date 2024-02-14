
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService, Users } from '../services/data.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import type { IonCheckbox, IonInput, IonItem, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class UserPage implements OnInit {

  user_current : Users ;
  id_current : string;
  isAdmin : boolean;
  isAccount : boolean;
  name_user : any;
  nameU:any;
  emailU:any;
  passU:any;
  typeU:any;
  ChangeTrrigerS=true;
  ChangeTrriger=false;
  PassChangeTrue=false;

  @ViewChild('ionInputPass', { static: true }) inputPass : IonInput;
  @ViewChild('ionInputPass2', { static: true }) inputPass2 : IonInput;


  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>{this.user_current=res})});
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>{this.isAdmin=res.user_type})});
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>this.setAccount(res.user_id,res.email,res.user_id,res.user_pass))});

   }

 
   


  async setPass(){
    //console.log(this.user_current.id);
    if(this.passU===this.inputPass.value) {console.log(this.dataService.updatePass2(this.user_current ,this.inputPass2.value));
      console.log("here");
    }


    this.ChangeTrrigerS=!this.ChangeTrrigerS;
    this.ChangeTrriger=!this.ChangeTrriger;
  }
  
  ngOnInit() {
  }

  setTrigger(){
    this.ChangeTrrigerS=!this.ChangeTrrigerS;
    this.ChangeTrriger=!this.ChangeTrriger;
  }
  
  setAccount(name:any,U_email:any,U_name:any,U_pass:any){
    if(name ==="VISITATOR_USER") this.isAccount=false;
    else this.isAccount= true;
    this.nameU=U_name;
    this.emailU=U_email;
    this.passU=U_pass;
    if(this.isAdmin) this.typeU="ADMINISTARTOR";
    else this.typeU="USER";
  }


  goBack(){
    this.router.navigate(['./menu-user']);
  }
    


  

}

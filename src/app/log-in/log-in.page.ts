import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { DataC, DataService, Users } from '../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule ]
})
export class LogInPage implements OnInit {
  @ViewChild('ionInputUsername', { static: true }) inputUser : IonInput;
  @ViewChild('ionInputPass', { static: true }) inputPass : IonInput;
  users: Users[] = [];
  check = false;
  varUser = "" ;
  varPass= "";
  temp: DataC;

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getUsers().subscribe(
      res=> {
        this.users=res;
      }

      )

    this.dataService.setUserCurrent("");
    this.dataService.setTrailCurrent("");
   }

   ngOnInit() {
    
  }
  
  signIN(){
    
    for(var index in this.users){
      if(
        ((this.users[index].email===this.inputUser.value)
        ||(this.users[index].user_id===this.inputUser.value))
        &&(this.users[index].user_pass===this.inputPass.value)
        
        ) 
        {
          this.check= true; this.varUser=this.varUser+this.inputUser.value;
       
          this.dataService.setUserCurrent(this.users[index].id);
          this.router.navigate(['./menu-user']);
        }
    }


    console.log(this.check);
    this.check=false;
    this.dataService.getUserCurrent().subscribe(res=> {console.log(res.data)});
    this.dataService.getTrailCurrent().subscribe(res=> {console.log(res.data)});
    
    
  }

  

}

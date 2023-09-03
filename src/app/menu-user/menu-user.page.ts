import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Users } from '../services/data.service';



@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.page.html',
  styleUrls: ['./menu-user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})


export class MenuUserPage implements OnInit {

  user_current : Users ;
  id_current : string;
  isAdmin : boolean;
  isAccount : boolean;
  name_user : any;
  

  constructor(private router: Router,private dataService: DataService) {
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>{this.user_current=res})});
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>{this.isAdmin=res.user_type})});
    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>this.setAccount(res.user_id))});
    
    
    }

  

 

  ngOnInit() {
    
  }

  setAccount(name:any){
    if(name ==="VISITATOR_USER") this.isAccount=false;
    else this.isAccount= true;
  }

  goPersonalTrails(){

    this.router.navigate(['./personal-trails']);
  }
  goUserList(){
    this.router.navigate(['./account-list']);

  }
  goBut(){

    this.isAdmin = this.user_current.user_type;
    //console.log(this.isAdmin);
    console.log(this.setAccount(this.user_current.user_id));
  }

  goBack(){
    this.router.navigate(['./start-page']);

  }
  goTrails(){
    this.router.navigate(['./trails']);
  }
  goMap(){
    this.router.navigate(['./map']);
  }

  goRecommendations(){
    this.router.navigate(['./recommendations']);
  }

  goAddtrails(){
    this.router.navigate(['./add-trails']);
  }


}

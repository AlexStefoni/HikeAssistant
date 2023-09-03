import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-trails',
  templateUrl: './add-trails.page.html',
  styleUrls: ['./add-trails.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddTrailsPage implements OnInit {


  @ViewChild('desc', { static: true }) desc : IonInput;
  @ViewChild('name', { static: true }) name : IonInput;
  @ViewChild('S1', { static: true }) S1 : IonInput;
  @ViewChild('S2', { static: true }) S2 : IonInput;
  @ViewChild('E1', { static: true }) E1 : IonInput;
  @ViewChild('E2', { static: true }) E2 : IonInput;
  
  id:any="ACTIVE";
  temp:any = "";
  constructor(private router: Router,private dataService: DataService) {

    this.dataService.getUserCurrent().subscribe(res=>{ this.dataService.getUser_byId(res.data).subscribe(res=>{this.temp=res.user_id})});

   }

  ngOnInit() {

  }


  goBack(){
    this.router.navigate(['./menu-user']);
  }
  saveButton(){
    console.log(this.desc.value);

    this.dataService.addTrail({
      Creator :  this.temp,
      EndLat :  this.E1.value,
      EndLon :  this.E2.value,
      Name  : this.name.value,
      StartLat  :  this.S1.value,
      StartLon  :  this.S2.value,
      description : this.desc.value
    })

    this.router.navigate(['./menu-user']);
  }
  
}

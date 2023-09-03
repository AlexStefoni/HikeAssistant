import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, MenuController } from '@ionic/angular';
import { DataService, Trails } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-trails',
  templateUrl: './personal-trails.page.html',
  styleUrls: ['./personal-trails.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PersonalTrailsPage implements OnInit {

  trails : Trails[]=[];
  trailsNew : Trails[]=[];



  constructor(private router: Router, public menuCtrl: MenuController, private dataService: DataService) {

    this.dataService.getTrails().subscribe(
      res=> {
        
        this.trails=res;
      }

      )

    this.dataService.getUserCurrent().subscribe(res=>{ 
      this.dataService.getUser_byId(res.data).subscribe(res=>{


        
        this.trailsNew = this.trails.filter((free)=>free.Creator == res.user_id);
        

      
      });
      console.log(res);
  
  
    });

   
    
      //this.trailsNew = this.trails.filter((free)=>free.Creator == this.creator);
      //console.log(this.creator);
      console.log(this.trailsNew);

   }

  ngOnInit() {
  }
  
  

  goBack( ){
    this.router.navigate(['./menu-user']);
  }
  go(tr:Trails){
    this.router.navigate(['./trail-details']);
    this.dataService.setTrailCurrent(tr.id);
  }
}

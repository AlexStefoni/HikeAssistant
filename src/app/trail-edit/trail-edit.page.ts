import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonInput, IonicModule } from '@ionic/angular';
import { DataService, Trails ,Users } from '../services/data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-trail-edit',
  templateUrl: './trail-edit.page.html',
  styleUrls: ['./trail-edit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrailEditPage implements OnInit {

  tempTrail : Trails;
  costumTrail : Trails;
  nameN : any; 
  newSLat : any;
  newSLon : any;
  newELat : any;
  newElon :any;
  desc: any;

  @ViewChild('name', { static: true }) nameT : IonInput;
  @ViewChild('ST', { static: true }) sLat : IonInput;
  @ViewChild('SL', { static: true }) sLon : IonInput;
  @ViewChild('ET', { static: true }) eLat : IonInput;
  @ViewChild('EL', { static: true }) eLon: IonInput;
  @ViewChild('des', { static: true }) descT : IonInput;


  constructor(private router: Router, private dataService: DataService) { 
    this.dataService.getTrailCurrent().subscribe(res=>{ this.dataService.getTrail_byId(res.data).subscribe(res=>
      { this.tempTrail=res,
        this.newELat=res.EndLat,
        this.newElon=res.EndLon,
        this.newSLat=res.StartLat,
        this.newSLon=res.StartLon,
        this.desc=res.description,
        this.nameN=res.Name,
        this.costumTrail=res
      })});

        
  }


  goBack(){
    this.router.navigate(['./trail-details']);
  }

  saveChanges(){




    this.costumTrail.Name=this.nameT.value;
    this.costumTrail.StartLat=this.sLat.value;
    this.costumTrail.StartLon=this.sLon.value;
    this.costumTrail.EndLat=this.eLat.value;
    this.costumTrail.EndLon=this.eLon.value;
    this.costumTrail.description=this.descT.value;


    console.log(this.costumTrail);
    this.dataService.updateTrails(this.tempTrail,this.costumTrail);
    this.router.navigate(['./trail-details']);
  
  }


  ngOnInit() {
  }

}

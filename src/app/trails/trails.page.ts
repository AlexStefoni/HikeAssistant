import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DataService, Trails, Users } from '../services/data.service';


@Component({
  selector: 'app-trails',
  templateUrl: './trails.page.html',
  styleUrls: ['./trails.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrailsPage {

  trails : Trails[];
  
  
  constructor(private router: Router, public menuCtrl: MenuController, private dataService: DataService) {
    this.dataService.getTrails().subscribe(
      res=> {
        this.trails=res;
      }

      )
   }

  goBack(){
    this.router.navigate(['./menu-user']);

  }
  

  go(tr:Trails ){
    this.router.navigate(['./trail-details']);
    this.dataService.setTrailCurrent(tr.id);
  }
  
  goTrails(){
    this.router.navigate(['./trails']);
  }

  goMap(){
    this.router.navigate(['./map']);
  }

  itemsFree =[
{name: 'TEST 1' },
{name: 'TEST 2' },
{name: 'TEST 3' },
{name: 'TEST 4' },
{name: 'TEST 5' },
{name: 'TEST 6' },
{name: 'TEST 7' },
{name: 'TEST 8' },
{name: 'TEST 9' },
{name: 'TEST 10' },
{name: 'TEST 11' },
{name: 'TEST 12' },
{name: 'TEST 13' },
{name: 'TEST 14' },
{name: 'TEST 15' },
{name: 'TEST 16' },
{name: 'TEST 17' },
{name: 'TEST 18' },
{name: 'TEST 19' },
{name: 'TEST 20' },
{name: 'TEST 21' },
{name: 'TEST 22' },
{name: 'TEST 23' },
{name: 'TEST 24' },
{name: 'TEST 25' },
{name: 'TEST 26' },
{name: 'TEST 27' },
{name: 'TEST 28' },
{name: 'TEST 29' },
{name: 'TEST 30' },
{name: 'TEST 31' },
{name: 'TEST 32' },
{name: 'TEST 33' },
{name: 'TEST 34' }
  ]
  

items = this.itemsFree.filter((free)=>free.name == 'TEST 15');

 


ngOnInit() {
  }
 
  

}

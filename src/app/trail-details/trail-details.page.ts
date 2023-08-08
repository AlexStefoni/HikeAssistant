import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-trail-details',
  templateUrl: './trail-details.page.html',
  styleUrls: ['./trail-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TrailDetailsPage implements OnInit {

  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getTrails().subscribe(res => {
      console.log(res);
    });
   }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./trails']);
  }

}

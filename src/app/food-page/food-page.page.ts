import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.page.html',
  styleUrls: ['./food-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FoodPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    
    this.router.navigate(['./menu-user']);
  }
}

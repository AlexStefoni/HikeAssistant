import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.page.html',
  styleUrls: ['./title-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TitlePagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  next(){
    this.router.navigate(['./start-page']);
  }
}

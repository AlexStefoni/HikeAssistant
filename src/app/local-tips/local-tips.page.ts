import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-local-tips',
  templateUrl: './local-tips.page.html',
  styleUrls: ['./local-tips.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LocalTipsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

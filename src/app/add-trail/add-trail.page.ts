import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-add-trail',
  templateUrl: './add-trail.page.html',
  styleUrls: ['./add-trail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddTrailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

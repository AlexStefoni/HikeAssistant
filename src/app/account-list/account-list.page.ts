import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService, Users } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.page.html',
  styleUrls: ['./account-list.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AccountListPage implements OnInit {


  users: Users[] = [];


  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getUsers().subscribe(
      res=> {
        this.users=res;
      }

      )
      
   }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./menu-user']);
  }
}

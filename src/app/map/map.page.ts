import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class MapPage {
  @ViewChild('map') mapRef:ElementRef<HTMLElement>;;
  map: GoogleMap;

  constructor(private router: Router) {}
  ionViewDidEnter() {
    this.createMap();
  }
  goTrails(){
    this.router.navigate(['./trails']);
  }

  goMap(){
    this.router.navigate(['./map']);
  }


  async createMap(){
    this.map = await GoogleMap.create({
      id: 'my-cool-map',
      element: this.mapRef.nativeElement,
      apiKey: environment.mapsKey,
      
      config: {
        center: {
          lat: 45.7,
          lng: 21.2,
        },
        zoom: 12,
      }
  });
  
  }
}

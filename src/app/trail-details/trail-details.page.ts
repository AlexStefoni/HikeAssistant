import { Component, OnInit,  ElementRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService, Trails } from '../services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { marker } from 'leaflet';

declare var google : any;

@Component({
  selector: 'app-trail-details',
  templateUrl: './trail-details.page.html',
  styleUrls: ['./trail-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ExploreContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})


export class TrailDetailsPage implements OnInit {

  @ViewChild('map',{read: ElementRef,static: false}) mapRef:ElementRef;
  @ViewChild('title', { static: true }) titleVar : ElementRef;

  map: any;

  markers: any = [
    {
      latitude: "",
      longitude: "",
    },
    {
      latitude: "",
      longitude: "",
    },
  ];
    

  trail: Trails;
  creator:any;
  name:any;
  id:any;
  desc:any;
  latS:any="";
  lonS:any="";
  latE:any="";
  lonE:any="";



  constructor(private router: Router, private dataService: DataService) {
    this.dataService.getTrailCurrent().subscribe(res=> {
      this.id = res.data;
      this.dataService.getTrail_byId(res.data).subscribe(res=> {  
      

        this.name=res.Name;
        this.creator=res.Creator;
        this.desc=res.description;
        this.latS=res.StartLat;
        this.lonS=res.StartLon;
        this.latE=res.EndLat;
        this.lonE=res.EndLon;
        

        this.markers=[
          {
            latitude: res.StartLat,
            longitude: res.StartLon,
          },
          {
            latitude: res.EndLat,
            longitude: res.EndLon,
          }
      
        ];

      })
    
    
    });

    
   }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
  
    this.showMap();
  }

  goBack(){
    this.router.navigate(['./trails']);
    
  }

  addMarkersToMap(markers:any){
  


    for (let marker of markers ){
      let position = new google.maps.LatLng(marker.latitude,marker.longitude);
      let mapMarker = new google.maps.Marker({
        position:position,
        title: marker.title,
        latitude: marker.latitude,
        longitude:marker.longitude
      });
      
      mapMarker.setMap(this.map);
      //this.addInfoWindowToMarker(mapMarker);

    } 

  }



 


  async showMap(){
    console.log(this.latS);
    const location = new google.maps.LatLng(this.latS, this.lonS);
    const options = {
      center : location,
      zoom : 10,
      DisableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    this.addMarkersToMap(this.markers);
  }

}

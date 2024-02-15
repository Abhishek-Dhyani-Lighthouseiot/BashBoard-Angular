import { AfterViewInit, Component , OnInit} from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-leaf-let-map',
  templateUrl: './leaf-let-map.component.html',
  styleUrls: ['./leaf-let-map.component.css'],
})
export class LeafLetMapComponent implements OnInit , AfterViewInit{
  options : any;

  ngOnInit(): void { }

  ngAfterViewInit(): void { 
    this.initializeMap();
  }

  initializeMap()
  {
    var map = L.map('map').setView([24.0434038,79.4249786],3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  }

}

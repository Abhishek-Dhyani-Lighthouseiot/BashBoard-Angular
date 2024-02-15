import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  images = [
    { name : '/assets/IMAGES/cityLight.jpg' },
    { name : '/assets/IMAGES/cityLight1.jpg' },
    { name : '/assets/IMAGES/grid.jpg' }
  ]

}

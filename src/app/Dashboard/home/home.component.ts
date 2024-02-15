import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  mainComponent : string = 'Dashboard';

  showScreen(event : string)
  {
    this.mainComponent = event;
  }
}

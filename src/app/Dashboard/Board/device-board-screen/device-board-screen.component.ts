import { Component } from '@angular/core';

@Component({
  selector: 'app-device-board-screen',
  templateUrl: './device-board-screen.component.html',
  styleUrls: ['../dash-board-screen/dash-board-screen.component.css']
})
export class DeviceBoardScreenComponent {
  meterNumber! : string;

  displayData(event :string)
  {
    this.meterNumber = event;
    console.log(this.meterNumber);
  }

}

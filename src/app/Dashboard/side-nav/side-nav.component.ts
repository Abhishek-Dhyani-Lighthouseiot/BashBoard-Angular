import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Output() getOption = new EventEmitter<string>();

  constructor()
  {

  }

  showDashBoard()
  {
    this.getOption.emit('Dashboard');
  }

  showDevices()
  {
    this.getOption.emit('Devices');
  }

  showServices()
  {
    this.getOption.emit('Services');
  }

  showData()
  {
    this.getOption.emit('Data');
  }

  showAccount()
  {
    this.getOption.emit('Account');
  }
}

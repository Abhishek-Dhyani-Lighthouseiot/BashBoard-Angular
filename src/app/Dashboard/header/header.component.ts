import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  darkTheme : boolean = false;
  userName = 'Light House IOT';

  toggleTheme()
  {
    this.darkTheme = !this.darkTheme;
    document.body.classList.toggle('dark');
  }
}

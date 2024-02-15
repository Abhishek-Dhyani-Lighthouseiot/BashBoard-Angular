import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meters-card',
  templateUrl: './meters-card.component.html',
  styleUrls: ['./meters-card.component.css']
})
export class MetersCardComponent implements OnChanges{
  @Input() meterNumber! : string;

  meterSelected : boolean = false;
  
  meterSerialNumber! : string;
  meterType! : string;
  installationDate! : string;
  commissioned! : string;
  currentBalance! : string;

  constructor()
  {
    
  }


  ngOnChanges(changes: SimpleChanges): void {
    if(this.meterNumber.length > 0)
    {
      this.meterSelected = true;
    }
    console.log("This is the child");
    console.log(this.meterNumber);
  }

}

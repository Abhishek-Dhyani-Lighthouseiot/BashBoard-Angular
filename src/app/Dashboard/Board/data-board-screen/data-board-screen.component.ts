import { Component, OnInit } from '@angular/core';
import { MeterService } from 'src/services/meter.service';

@Component({
  selector: 'app-data-board-screen',
  templateUrl: './data-board-screen.component.html',
  styleUrls: ['./data-board-screen.component.css']
})
export class DataBoardScreenComponent implements OnInit{

  constructor(private meters : MeterService) { }

  ngOnInit(): void {
    this.meters.GetMeterList().subscribe({
      next : (result) => {
        console.log(result);
      },
      complete : () => console.log('Completed Succefully'),
      error : (err) => console.log(err)
    });
  }

}

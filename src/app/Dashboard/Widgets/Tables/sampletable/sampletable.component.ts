import { Component, OnInit } from '@angular/core';
import { MeterService } from 'src/services/meter.service';

@Component({
  selector: 'app-sampletable',
  templateUrl: './sampletable.component.html',
  styleUrls: ['./sampletable.component.css']
})
export class SampletableComponent implements OnInit{

  meterList : any[] = [];
  tableHeader : any;
  tableBody : any[] = [];
  response : any;

  constructor(private meterservice : MeterService){

  }

  ngOnInit(): void {
    this.getMeterList();
  }

  getMeterList()
  {
    this.meterservice.GetMeterList().subscribe({
      next : (result) => {
        this.response = result;
        this.meterList = (Object.values(result));
        this.tableHeader = (Object.keys(this.meterList[0]));

        this.meterList.forEach(element => {
          console.log(this.tableBody);
          this.tableBody.push(Object.values(element));
        });


      },
      complete : () => {
        console.log('Completed')
      },
      error : (err) => {
        console.log(err);
      }
    });
  }

  getKeys(): string[] {
    return Object.values(this.meterList[0]);
  }

}

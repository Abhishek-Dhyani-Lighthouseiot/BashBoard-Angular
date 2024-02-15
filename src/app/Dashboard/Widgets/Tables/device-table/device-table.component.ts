import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MeterService } from 'src/services/meter.service';

@Component({
  selector: 'app-device-table',
  templateUrl: './device-table.component.html',
  styleUrls: ['./device-table.component.css']
})

export class DeviceTableComponent implements OnInit{
  @Output() showMeterData : EventEmitter<string> = new EventEmitter<string>();
  
  representatives!: Representative[];
  statuses!: any[];

  metervalue! : any[];

  meterList : any[] = [];
  tableHeader : any;
  tableBody : any[] = [];
  response : any;

  constructor(private meterService : MeterService)
  {
    this.getMeterList();
  }

  getKeys(): string[] {
    return Object.keys(this.meterList[0]);
  }
  
  getMeterData(meterNumer : any)
  {
    this.showMeterData.emit(meterNumer);
  }

  getMeterList()
  {
    this.meterService.GetMeterList().subscribe({
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

  ngOnInit(): void {
    

    this.representatives = [
      { name: 'Amy Elsner', image: 'amyelsner.png' },
      { name: 'Anna Fali', image: 'annafali.png' },
      { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
      { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
      { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
      { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
      { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
      { name: 'Onyama Limba', image: 'onyamalimba.png' },
      { name: 'Stephen Shaw', image: 'stephenshaw.png' },
      { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
    ];

    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ];
  }

}

export interface Representative{
  name : string;
  image : string
}

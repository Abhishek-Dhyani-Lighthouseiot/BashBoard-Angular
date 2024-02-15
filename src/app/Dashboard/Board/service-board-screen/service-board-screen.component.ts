import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-service-board-screen',
  templateUrl: './service-board-screen.component.html',
  styleUrls: ['./service-board-screen.component.css']
})
export class ServiceBoardScreenComponent implements OnInit{

  read_service : boolean = false;
  write_service : boolean = false;
  meter_configuration : boolean = false;
  request_log : boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  readService()
  {
    this.read_service = true;
  }
  writeService()
  {
    this.write_service = true;
  }
  meterConfiguration()
  {
    this.meter_configuration = true;
  }
  RequestLog()
  {
    this.request_log = true;
  }
  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeterService {

  dummyUrl = 'https://localhost:7177';

  constructor(private http :HttpClient) { }

  GetMeterList()
  {
    return this.http.get(this.dummyUrl + '/GetMeterList');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = 'http://localhost:26515/api/v1.0';

  dummyUrl = 'https://localhost:7177';

  constructor(private http : HttpClient) { }

  Login(user : any)
  {
    // return this.http.post(this.baseUrl+'/Account/Login',user);
    return this.http.get(this.dummyUrl+'/Login',user);
  }
}

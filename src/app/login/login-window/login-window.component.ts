import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/Interfaces/user';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent {
  
  showPassword : boolean = true;
  Timer = '15:00';
  otpBox = false;
  passwordType : string = 'password';
  invalidPassword : boolean = true;
  enableOtp : boolean = false;
  submitButton  : string = 'Login';
  
  userData: user ={
    deviceType:'Web',
    password:'',
    userName:''
  };

  constructor(private Route : Router, private Service : AccountService){

  }

  ngOnInit(): void {
    this.enableOtp ? this.submitButton = 'Get OTP' : this.submitButton = 'Login';
  }

  move(e : any,p : any,c: any ,n :any){
    var length = c.value.length;
    var maxlength = c.getAttribute('maxlength');
    if(length == maxlength)
    {
      if(n != ""){
        n.focus();
      }
    }
    if(e.key === "Backspace")
    {
      if(p != "")
      {
        p.focus()
      }
    }
  }

  onSubmit(contactForm : any) {
    if(this.enableOtp == true)
    {
      this.otpBox = !this.otpBox;
    }
    else
    {
      console.log(contactForm.value);
      this.userData.userName = contactForm.id;
      this.userData.password = contactForm.password;
      console.log(this.userData);
      // this.Login(this.userData);  //We have to use this in reality the below line is just to show you how it is going to work
      this.Route.navigate(['/Home']);
    }
  }

  Login(userData : any)
  {
    this.Service.Login(this.userData).subscribe({
      next : (result : any) => {
        if(result.success == true)
        {
          console.log(result.Data.UserName);
          console.log(result.Data.Token);
          console.log(result.Data);


          this.Route.navigate(['/Home']);
        }
        else{
          console.log("Unsu")
        }
      },
      complete: () => { console.log("Completed") },
      error: (err) => { console.log(err)}
    });
    // this.Route.navigate(['/Home']);
  }

  viewPassword()
  {
    this.showPassword = !this.showPassword;
    this.showPassword ? this.passwordType = 'password' : this.passwordType = 'text';
  }
}

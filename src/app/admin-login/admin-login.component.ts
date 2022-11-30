import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  constructor(private rout:Router){}
  Username=""
  Password=""

  readValue=()=>{
    let data={
      "Username":this.Username,
      "Password":this.Password
    }
    console.log(data)
    if (this.Username=="admin" && this.Password == "12345") {
      this.rout.navigate(['/entry'])
      
    } else {
      alert("invalid credential")
      
    }
  }


}

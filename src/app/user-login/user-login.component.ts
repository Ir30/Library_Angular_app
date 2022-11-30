import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private rout:Router){}
  Username=""
  Password=""

  readValue= ()=>{
    let data ={
      "Username":this.Username,
      "Password":this.Password
    }
    console.log(data)
    if (this.Username=="user" && this.Password=="789456") {
      this.rout.navigate(['/book_view'])
    } else {
      alert("Invalid Credentials")
    }
  }

}

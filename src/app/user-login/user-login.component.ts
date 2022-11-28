import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  Username=""
  Password=""

  readValue= ()=>{
    let data ={
      "Username":this.Username,
      "Password":this.Password
    }
    console.log(data)
  }

}

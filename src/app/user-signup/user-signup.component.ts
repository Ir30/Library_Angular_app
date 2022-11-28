import { Component } from '@angular/core';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  Name=""
  AadharNumber=""
  Address=""
  PinCod=""
  DateofBirth=""
  Email=""
  PhoneNumber=""
  Username=""
  Password=""
  ConfirmPassword=""

  readValues=()=>{
    let data={
      "Name":this.Name,
      "AadharNumber":this.AadharNumber,
      "Address":this.Address,
      "PinCod":this.PinCod,
      "DateofBirth":this.DateofBirth,
      "Email":this.Email,
      "PhoneNumber":this.PhoneNumber,
      "Username":this.Username,
      "Password":this.Password,
      "ConfirmPassword":this.ConfirmPassword
    }

    console.log(data)
  }
}

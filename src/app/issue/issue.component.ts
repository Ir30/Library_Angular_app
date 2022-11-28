import { Component } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {

  Name=""
  Book_Title=""
  Date_Of_Issue=""
  Membership_No=""

  readValue = ()=>{
    let data={
    "Name":this.Name,
    "Book_Title":this.Book_Title,
    "Date_Of_Issue":this.Date_Of_Issue,
    "Membership_No":this.Membership_No
    }
    console.log(data)
}

}

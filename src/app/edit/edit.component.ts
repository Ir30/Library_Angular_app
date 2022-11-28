import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  BookTitle=""

  readValue=()=>{
    let data={
      "BookTitle":this.BookTitle
    }
    console.log(data)
  }
}

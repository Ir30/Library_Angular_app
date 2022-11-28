import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  BookTitle=""

  readValue=()=>{
    let data={
      "BookTitle":this.BookTitle
    }
    console.log(data)
  }
}

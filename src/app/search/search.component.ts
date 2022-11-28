import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  BookTitle=""

  readValue=()=>{
    let data={
      "BookTitle":this.BookTitle
    }
    console.log(data)
  }

}

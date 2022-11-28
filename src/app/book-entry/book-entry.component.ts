import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  image=""
  title=""
  price=""
  Auther=""
  publisher=""
  Language="Language"
  Distributer=""
  Relesed_Year=""

  readValue = ()=>{
    let data ={
      "image":this.image,
      "title":this.title,
      "price":this.price,
      "Auther":this.Auther,
      "publisher":this.publisher,
      "Language":this.Language,
      "Distributer":this.Distributer,
      "Relesed_Year":this.Relesed_Year

    }
    console.log(data)
  }

}

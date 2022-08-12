import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BooksComponent } from '../books/books.component';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'reader-books',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {
  constructor(public booksService: BooksService) { }
  ngOnInit(): void {}
  onHideShowDetails(event: any) {this.booksService.toggleDetails}
  
  isAllLiked: boolean = false;

  @ViewChildren("books") books: QueryList<BooksComponent> | any = null;

  isAllLikedChange(event: any) {
    let book = this.books.toArray();
    for (let i = 0; i < book.length; i ++) {
      book[i].isAllLikedChange(this.isAllLiked)
    }
  }
}

import { Component, OnInit } from '@angular/core';
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
}

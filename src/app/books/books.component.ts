import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'books-reader',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(public booksService: BooksService) { }
  ngOnInit(): void {}

}

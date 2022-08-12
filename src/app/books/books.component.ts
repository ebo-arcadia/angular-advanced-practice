import { Component, ContentChild, ContentChildren, OnInit, QueryList } from '@angular/core';
import { LikedComponent } from '../liked/liked.component';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'books-reader',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  constructor(public booksService: BooksService) { }
  ngOnInit(): void {}

  // if only one grand child component instance is passed from the parent component to the child component
  // @ContentChild("likeBox") likedComponmentInstance: LikedComponent | any = null;

  // isAllLikedChange(yes: boolean) {
  //   if (yes) { this.likedComponmentInstance.like();}
  //   else { this.likedComponmentInstance.undolike(); }
  // }

  // if there are multiple grand child components pare assed to the child component from the parent component
  @ContentChildren("likeBox") likedCompInstance: QueryList<LikedComponent> | any = null;

  isAllLikedChange(yes: boolean) {
    let likedCompInstance = this.likedCompInstance.toArray();
    if (yes) { 
      for (let i = 0; i < likedCompInstance.length; i++) {likedCompInstance[i].like()};}
    else { 
      for (let i = 0; i < likedCompInstance.length; i++) {likedCompInstance[i].undolike()};}
  }
}

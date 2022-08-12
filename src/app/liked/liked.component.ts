import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liked-checkbox',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  liked: boolean = false;
  disliked: boolean = false;
  constructor() { }
  ngOnInit(): void {}
  like() { this.liked = true; }
  undolike() { this.liked = false; }
}

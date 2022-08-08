import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liked-checkbox',
  templateUrl: './liked.component.html',
  styleUrls: ['./liked.component.css']
})
export class LikedComponent implements OnInit {
  isChecked: boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-size',
  templateUrl: './change-size.component.html',
  styleUrls: ['./change-size.component.css']
})
export class ChangeSizeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fontSizePx = 16;
}

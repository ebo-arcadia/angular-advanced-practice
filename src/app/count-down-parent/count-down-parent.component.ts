import { Component, OnInit } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-count-down-parent',
  templateUrl: './count-down-parent.component.html',
  styleUrls: ['./count-down-parent.component.css']
})
export class CountDownParentComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

}

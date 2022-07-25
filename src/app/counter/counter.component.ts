import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  name: string = "";
  @Input() counter = 0;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
    this.counterChange.emit(this.counter)
  }

  decrement() {
    this.counter--;
    this.counterChange.emit(this.counter)
  }

}

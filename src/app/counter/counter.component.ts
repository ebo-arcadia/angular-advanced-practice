import { Component, OnInit, Input, Output, EventEmitter, SimpleChange, SimpleChanges, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnChanges, OnInit, DoCheck {
  name: string = "";
  @Input() counter = 1;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log("------ngOnInit is called-----!!!")
  }

  ngOnChanges(valueChanges: SimpleChanges) {
    console.info("-----ng on change is called----!!!")
    console.log(valueChanges['prop'])
  }

  ngDoCheck() {
    console.log("-----ng Do Check is incoked----!!!")
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

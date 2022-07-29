import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'timer-parent-view-child',
  templateUrl: './timer-parent-view-child.component.html',
  styleUrls: ['./timer-parent-view-child.component.css']
})
export class TimerParentViewChildComponent implements AfterViewInit {
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent

  seconds() { return 0; }

  ngAfterViewInit(): void {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error

    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);}

    start() { this.timerComponent.start(); }
    stop() { this.timerComponent.stop(); }
  }

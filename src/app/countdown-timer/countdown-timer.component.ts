import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnDestroy {
  constructor() { }
  ngOnInit(): void {}

  intervalId = 0;
  message = '';
  seconds = 11;

  ngOnDestroy() { this.clearTimer(); }

  start() { this.countDown() }

  stop() {
    this.clearTimer();
    this.message = `pauseds at ${this.seconds} seconds`;
  }

  private clearTimer() { clearInterval(this.intervalId); }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) { this.message = 'Blast off!!!';}
      else {
        if (this.seconds < 0) { this.seconds = 10; }
        this.message = `${this.seconds} seconds and counting`;
      }
    }, 1000);
  }
}

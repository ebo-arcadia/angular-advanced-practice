import { Component } from '@angular/core';
import { LoggerService } from '../all-lifecycle-hooks/logger.service';

@Component({
  selector: 'all-lifecycle-hooks-parent',
  templateUrl: './all-lifecycle-hooks-parent.component.html',
  styleUrls: ['./all-lifecycle-hooks-parent.component.css'],
  providers:  [ LoggerService ]
})
export class AllLifecycleHooksParentComponent {
  hasChild = false;
  hookLog: string[] = [];

  heroName = 'Windstorm';
  private logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.hookLog = logger.logs;
  }

  toggleChild() {
    this.hasChild = !this.hasChild;
    if (this.hasChild) {
      this.heroName = 'Spider-man';
      this.logger.clear(); // clear log on create
    }
    this.hookLog = this.logger.logs;
    this.logger.tick();
  }
}

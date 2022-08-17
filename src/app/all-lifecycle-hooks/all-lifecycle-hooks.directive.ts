import { Directive, OnInit} from '@angular/core';
import { LoggerService } from './logger.service';

let nextId = 1;
@Directive({
  selector: '[AllLifecycleHooks]'
})
export class AllLifecycleHooksDirective  implements OnInit {

  constructor(private logger: LoggerService) {}

  ngOnInit() {
      this.logIt('OnInit')
  }

  logIt(msg: string) {
    this.logger.log(`#${nextId++} ${msg}`);
  }

}

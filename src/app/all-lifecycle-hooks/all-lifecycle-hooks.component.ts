import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

import { LoggerService } from './logger.service';
import { AllLifecycleHooksDirective } from './all-lifecycle-hooks.directive';

@Component({
  selector: 'all-lifecycle-hooks',
  templateUrl: './all-lifecycle-hooks.component.html',
  styleUrls: ['./all-lifecycle-hooks.component.css']
})
export class AllLifecycleHooksComponent extends AllLifecycleHooksDirective implements 
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked,
  OnDestroy {

  @Input() name = '';
  private verb = 'initialized';

  constructor(logger: LoggerService) { 
    super(logger);
    const is = this.name ? 'is' : 'is not';
    this.logIt(`name ${is} known at construction`);
  }

    // only called for/if there is an @input variable set by parent.
    ngOnChanges(changes: SimpleChanges) {
      const changesMsgs: string[] = [];
      for (const propName in changes) {
        if (propName === 'name') {
          const name = changes['name'].currentValue;
          changesMsgs.push(`name ${this.verb} to "${name}"`);
        } else {
          changesMsgs.push(propName + ' ' + this.verb);
        }
      }
      this.logIt(`OnChanges: ${changesMsgs.join('; ')}`);
      this.verb = 'changed'; // next time it will be a change
    }

      // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { this.logIt('DoCheck cycle triggered'); }

  ngAfterContentInit() { this.logIt('AfterContentInit triggered');  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { this.logIt('AfterContentChecked triggered'); }

  ngAfterViewInit() { this.logIt('AfterViewInit triggered'); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { this.logIt('AfterViewChecked triggered'); }

  ngOnDestroy() { this.logIt('OnDestroy triggered'); }
}




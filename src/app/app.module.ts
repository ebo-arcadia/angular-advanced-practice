import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { SizerComponent } from './sizer/sizer.component';
import { ChangeSizeComponent } from './change-size/change-size.component';
import { BuyerComponent } from './e-commerce/buyer.component';
import { ProductComponent } from './product/product.component';
import { DecisionsComponent } from './decisions/decisions.component';
import { DecisionsEvaluatorComponent } from './decisions-evaluator/decisions-evaluator.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountDownParentComponent } from './count-down-parent/count-down-parent.component';
import { TimerParentViewChildComponent } from './timer-parent-view-child/timer-parent-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SizerComponent,
    ChangeSizeComponent,
    BuyerComponent,
    ProductComponent,
    DecisionsComponent,
    DecisionsEvaluatorComponent,
    CountdownTimerComponent,
    CountDownParentComponent,
    TimerParentViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

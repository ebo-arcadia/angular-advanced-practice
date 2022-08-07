import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ChangeSizeComponent } from './change-size/change-size.component';
import { BuyerComponent } from './e-commerce/buyer.component';
import { DecisionsEvaluatorComponent } from './decisions-evaluator/decisions-evaluator.component';
import { CountDownParentComponent } from './count-down-parent/count-down-parent.component';
import { TimerParentViewChildComponent } from './timer-parent-view-child/timer-parent-view-child.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ReaderComponent } from './reader/reader.component';
import { MessageReceiverComponent } from './message-receiver/message-receiver.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: 'full'},
  { path: "counter", component: CounterComponent },
  { path: "sizer", component: ChangeSizeComponent},
  { path: "eCommerce", component: BuyerComponent},
  { path: "decision-evaluate", component: DecisionsEvaluatorComponent},
  { path: "timer", component: CountDownParentComponent},
  { path: "timer-view-child", component: TimerParentViewChildComponent},
  { path: "tasks", component: TasksListComponent},
  { path: "reader-books", component: ReaderComponent},
  { path: "message-receiver", component: MessageReceiverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

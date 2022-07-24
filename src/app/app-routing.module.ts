import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { SizerComponent } from './sizer/sizer.component';
import { ChangeSizeComponent } from './change-size/change-size.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: 'full'},
  { path: "counter", component: CounterComponent },
  { path: "sizer", component: ChangeSizeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

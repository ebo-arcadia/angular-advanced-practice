import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ChangeSizeComponent } from './change-size/change-size.component';
import { BuyerComponent } from './e-commerce/buyer.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: 'full'},
  { path: "counter", component: CounterComponent },
  { path: "sizer", component: ChangeSizeComponent},
  { path: "eCommerce", component: BuyerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

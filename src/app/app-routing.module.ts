import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { ChangeSizeComponent } from './change-size/change-size.component';
import { ProductComponent } from './product/product.component';
import { BuyerComponent } from './buyer/buyer.component';

const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: 'full'},
  { path: "counter", component: CounterComponent },
  { path: "sizer", component: ChangeSizeComponent},
  { path: "eCommerce/buyer", component: BuyerComponent},
  { path: "eCommerce/product", component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

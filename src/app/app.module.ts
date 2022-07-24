import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { CounterComponent } from './counter/counter.component';
import { SizerComponent } from './sizer/sizer.component';
import { ChangeSizeComponent } from './change-size/change-size.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    SizerComponent,
    ChangeSizeComponent
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

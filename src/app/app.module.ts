import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

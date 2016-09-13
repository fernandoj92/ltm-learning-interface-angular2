import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlotTestComponent } from './plot-test/plot-test.component';

@NgModule({
  imports: [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    PlotTestComponent,
  ],
  bootstrap: [ 
    AppComponent 
  ]
})

export class AppModule { }
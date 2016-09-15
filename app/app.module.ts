import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent }       from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlotTestComponent }  from './plot-test/plot-test.component';
import { WsTestComponent }    from './ws-test/ws-test.component';

// Services
import { WsTestService }      from './ws-test/ws-test.service';

@NgModule({
  imports: [ 
    BrowserModule 
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    PlotTestComponent,
    WsTestComponent,
  ],
  providers: [
    WsTestService,
  ],
  bootstrap: [ 
    AppComponent 
  ]
})

export class AppModule { }
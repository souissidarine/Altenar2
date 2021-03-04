import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CouponcodeComponent } from './couponcode/couponcode.component';
import { BetslipComponent } from './betslip/betslip.component';
import { BestleaguesComponent } from './bestleagues/bestleagues.component';
import { SportviewComponent } from './sportview/sportview.component';
import { LivenowComponent } from './livenow/livenow.component';

import {APIService} from './api.service';
import { MiddleDashInjectorPipe } from './pipes/middle-dash-injector.pipe';
import { SingleEventCotesComponent } from './single-event-cotes/single-event-cotes.component';




@NgModule({
  declarations: [
    AppComponent,
    CouponcodeComponent,
    BetslipComponent,
    BestleaguesComponent,
    SportviewComponent,
    LivenowComponent,
    MiddleDashInjectorPipe,
    SingleEventCotesComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,

  ],
  providers: [
    APIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

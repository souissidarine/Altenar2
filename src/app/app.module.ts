import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

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
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { SportlistComponent } from './sportlist/sportlist.component';
import { NgSpinnerModule } from 'ng-bootstrap-spinner';
import { CountryComponent } from './country/country.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { SportComponent } from './sport/sport.component';





@NgModule({
  declarations: [
    AppComponent,
    CouponcodeComponent,
    BetslipComponent,
    BestleaguesComponent,
    SportviewComponent,
    LivenowComponent,
    MiddleDashInjectorPipe,
    SingleEventCotesComponent,
    SportlistComponent,
    CountryComponent,
    LeaguesComponent,
    SportComponent
  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSpinnerModule,
    NgxUiLoaderModule,

  ],
  providers: [
    APIService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

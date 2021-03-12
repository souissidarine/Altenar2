import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivenowComponent } from './livenow/livenow.component';
import { MatchsLeagueComponent } from './matchs-league/matchs-league.component';
import { SportviewComponent } from './sportview/sportview.component';

const routes: Routes = [
  {
    path: 'matchsLeaugue', component: MatchsLeagueComponent
  },
  {
    path: '', component: LivenowComponent,

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

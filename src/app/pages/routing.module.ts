import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -- Component
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LikedsComponent } from './likeds/likeds.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'likeds', component: LikedsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
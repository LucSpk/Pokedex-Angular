import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// -- Component
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './details/details.component';
import { LikedsComponent } from './likeds/likeds.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pokemon', component: SearchComponent },
  { path: 'pokemon/details/:id', component: DetailsComponent },
  { path: 'likeds', component: LikedsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Module
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

// -- Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LikedsComponent } from './likeds/likeds.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    LikedsComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

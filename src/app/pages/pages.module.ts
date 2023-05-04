import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// -- Module
import { RoutingModule } from './routing.module';

// -- Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LikedsComponent } from './likeds/likeds.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    LikedsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule
  ]
})
export class PagesModule { }

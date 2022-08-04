import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {NgImageSliderModule} from "ng-image-slider";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";


@NgModule({
  declarations: [
    HomeComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        MatButtonModule,
        MatMenuModule,
        MatSidenavModule,
        NgImageSliderModule,
        NgxUsefulSwiperModule
    ]
})
export class HomeModule { }

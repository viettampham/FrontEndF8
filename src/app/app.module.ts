import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {HomeModule} from "./home/home.module";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {NgImageSliderModule} from "ng-image-slider";
import {SwiperModule} from "swiper/angular";
import {NgxUsefulSwiperModule} from "ngx-useful-swiper";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HomeModule,
    MatMenuModule,
    MatSidenavModule,
    FormsModule,
    NgImageSliderModule,
    SwiperModule,
    NgxUsefulSwiperModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

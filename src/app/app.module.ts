import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { NameComponent } from './banner/name/name.component';
import { NavComponent } from './banner/nav/nav.component';
import { SummaryComponent } from './anime-details/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AnimeDetailsComponent,
    NameComponent,
    NavComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

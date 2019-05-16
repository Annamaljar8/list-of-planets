import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlanetsComponent } from './planets/planets.component';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';
import { PlanetService } from './planet.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    PlanetsComponent,
    PlanetDetailComponent,
    MessagesComponent,
    DashboardComponent,
    PaginationComponent
  ],
  providers: [
    PlanetService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

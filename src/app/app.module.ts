import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { PlayDetailsComponent } from './play-library/play-details/play-details.component';
import { PlaysListComponent } from './play-library/plays-list/plays-list.component';
import { PlaysComponent } from './play-library/plays.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaysComponent,
    PlaysListComponent,
    PlayDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

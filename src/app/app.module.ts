import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/search.component';
import { BGGService } from './bgg.service';
import { DisplayComponent } from './component/display.component';
import { SearchTwoComponent } from './othercomponent/search-two.component';
import { DisplayTwoComponent } from './othercomponent/display-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    SearchTwoComponent,
    DisplayTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BGGService],
  bootstrap: [AppComponent]
})
export class AppModule { }

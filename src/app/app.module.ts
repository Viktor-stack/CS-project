import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {IsMemoryDataService} from "./db/IsMemoryDataService";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {MainComponent} from './layouts/main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormModalComponent} from './components/form-modal/form-modal.component';
import { ViewingComponent } from './components/viewing/viewing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormModalComponent,
    ViewingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(IsMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

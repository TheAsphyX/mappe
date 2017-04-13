import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { App } from './app.component';
import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [
    App
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyCUyaLim6v4CB_eo-oJmeDlvPCQxwHha70",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [App]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { Assignment2Component } from './assignment-2/assignment-2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TitleComponent,
    FooterComponent,
    Assignment2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

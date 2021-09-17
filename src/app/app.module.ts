import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BandoComponent} from './components/bando/bando.component';
import {ListPersonnesComponent} from './components/list-personnes/list-personnes.component';
import {ListMessagesComponent} from './components/list-messages/list-messages.component';
import {MessageComponent} from './components/message/message.component';
import {NouveauMessageComponent} from './components/nouveau-message/nouveau-message.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { InconnuComponent } from './components/inconnu/inconnu.component';
import {RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    BandoComponent,
    ListPersonnesComponent,
    ListMessagesComponent,
    MessageComponent,
    NouveauMessageComponent,
    InconnuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {DocumentsComponent} from './documents/document.component';
import {ProposalListComponent} from './proposal/proposal-list.component';
import  {ProposalNewComponent} from './proposal/proposal-new.component';
import {ProposalShowComponent} from './proposal/proposal-show.component';

import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent,
    ProposalShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

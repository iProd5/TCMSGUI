import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { MainComponent } from './main/main.component';
import { NewclientComponent } from './newclient/newclient.component';
import { NewprojectComponent } from './newproject/newproject.component';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProjectComponent,
    MainComponent,
    NewclientComponent,
    NewprojectComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

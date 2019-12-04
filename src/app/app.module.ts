import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ProjectComponent } from './project/project.component';
import { MainComponent } from './main/main.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NewProjectComponent } from './new-project/new-project.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ProjectComponent,
    MainComponent,
    NewClientComponent,
    NewProjectComponent
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

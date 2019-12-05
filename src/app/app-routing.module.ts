import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {MainComponent} from './main/main.component';
import {ProjectComponent} from './project/project.component';
import {NewprojectComponent} from './newproject/newproject.component';
import {NewclientComponent} from './newclient/newclient.component';


const routes: Routes = [
{path:'', component:MainComponent},
{path:'project', component:ProjectComponent},
{path:'main', component:MainComponent},
{path:'client', component:ClientComponent},
{path:'newclient', component:NewclientComponent},
{path:'newproject', component:NewprojectComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

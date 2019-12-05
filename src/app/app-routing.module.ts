import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './client/client.component';
import {MainComponent} from './main/main.component';
import {ProjectComponent} from './project/project.component';



const routes: Routes = [
{path:'', component:MainComponent},
{path:'project', component:ProjectComponent},
{path:'main', component:MainComponent},
{path:'client', component:ClientComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

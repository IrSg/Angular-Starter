import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurSecondComponentComponent } from './our-second-component/our-second-component.component';

const routes: Routes = [
{ path: "", redirectTo: "home", pathMatch: 'full' }, //our home page will be the home route

{path: "home", component: OurSecondComponentComponent } //this links the home route to the second component, so the second component becomes the home page


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

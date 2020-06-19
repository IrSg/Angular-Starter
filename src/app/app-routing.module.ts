import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurSecondComponentComponent } from './our-second-component/our-second-component.component';

const routes: Routes = [
{ path: "coolcomponent", component: OurSecondComponentComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

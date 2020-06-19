import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazingFirstComponentComponent } from './amazing-first-component/amazing-first-component.component';
import { OurSecondComponentComponent } from './our-second-component/our-second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazingFirstComponentComponent,
    OurSecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

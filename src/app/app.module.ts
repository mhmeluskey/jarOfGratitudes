import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyJarComponent } from './my-jar/my-jar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GratitudeComponent } from './gratitude/gratitude.component';

@NgModule({
  declarations: [
    AppComponent,
    MyJarComponent,
    GratitudeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

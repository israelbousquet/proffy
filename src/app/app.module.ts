import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDomainModule } from './domain/home/home.domain.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeDomainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

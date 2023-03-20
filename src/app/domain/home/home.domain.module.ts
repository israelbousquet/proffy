import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErroMsgComponent } from './components/erro-msg/erro-msg.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from '../../domain/home/pages/home/home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { HomeDomainRoutingModule } from './home-routing.domain.module';

@NgModule({
  declarations: [
    FormComponent,
    HomeComponent,
    ErroMsgComponent,
    ErroMsgComponent,
  ],
  imports: [
    CommonModule,
    HomeDomainRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
  ],
  exports: [],
})
export class HomeDomainModule {}

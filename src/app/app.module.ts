import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { OneComponent } from './learning/one/one.component';
import { TwoComponent } from './learning/two/two.component';

import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { CardModule } from 'primeng/card';
import { RippleModule } from 'primeng/ripple';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { ThreeComponent } from './learning/three/three.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    FormsModule,
    CardModule,
    RippleModule,
    ToggleButtonModule
  ],
  declarations: [AppComponent, HomeComponent, OneComponent, TwoComponent, ThreeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

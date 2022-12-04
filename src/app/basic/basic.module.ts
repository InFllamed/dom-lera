import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdvertisementComponent} from "./advertisement/advertisement.component";
import {BasicComponent} from "./basic.component";



@NgModule({
  declarations: [
    BasicComponent,
    AdvertisementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {AppTemplateComponent} from "./app-template.component";



@NgModule({
  declarations: [
    AppTemplateComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AppTemplateModule { }

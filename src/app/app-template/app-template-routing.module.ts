import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppTemplateComponent} from "./app-template.component";
import {BasicComponent} from "../basic/basic.component";

export const routes: Routes = [
  {
    path: '',
    data: { title: 'main' },
    component: AppTemplateComponent,
    children: [
      {
        path: 'basic',
        data: { title: 'basic' },
        component: BasicComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppTemplateRoutingModule { }

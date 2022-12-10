import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  // {
  //   path: '',
  //   data: { title: 'main' },
  //   component: AppTemplateComponent,
  //   children: [
  //     {
  //       path: '',
  //       data: {title: 'basic'},
  //       component: BasicComponent,
  //     },
  //     {
  //       path: 'advertisement',
  //       data: {title: 'advertisement'},
  //       component: AdvertisementComponent
  //     }
  //   ]
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppTemplateRoutingModule { }

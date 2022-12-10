import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppTemplateComponent} from "./app-template/app-template.component";
import {BasicComponent} from "./basic/basic.component";
import {AdvertComponent} from "./advert/advert.component";

export const routes: Routes = [
  {
    path: '',
    title: 'dom-lera',
    data: {title: 'app'},
    component: AppTemplateComponent,
    children: [
      {
        path: '',
        data: {title: 'basic'},
        component: BasicComponent,
      },
      {
        path: 'advert',
        data: {title: 'adver'},
        component: AdvertComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {AppTemplateComponent} from "./app-template/app-template.component";
import {BasicComponent} from "./basic/basic.component";
import {AdvertComponent} from "./advert/advert.component";
import {SingleAdvertComponent} from "./single-advert/single-advert.component";
import {ProfileComponent} from "./profile/profile.component";

export const routes: Routes = [
  {
    path: '',
    title: 'Valeriia dim',
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
        data: {title: 'advert'},
        component: AdvertComponent
      },
      {
        path: 'single',
        data: {title: 'single'},
        component: SingleAdvertComponent
      },
      {
        path: 'profile',
        data: {title: 'profile'},
        component: ProfileComponent
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

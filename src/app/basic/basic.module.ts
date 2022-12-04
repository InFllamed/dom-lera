import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponent} from "./basic.component";
import {SearchComponent} from './search/search.component';
import {PopularComponent} from './popular/popular.component';
import {SharedElementsModule} from "../shared-elements/shared-elements.module";
import {InfoComponent} from './info/info.component';


@NgModule({
  declarations: [
    BasicComponent,
    SearchComponent,
    PopularComponent,
    InfoComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedElementsModule
  ]
})
export class BasicModule { }

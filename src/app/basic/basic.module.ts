import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasicComponent} from "./basic.component";
import {SearchComponent} from './search/search.component';
import {PopularComponent} from './popular/popular.component';
import {SharedElementsModule} from "../shared-elements/shared-elements.module";


@NgModule({
  declarations: [
    BasicComponent,
    SearchComponent,
    PopularComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    SharedElementsModule
  ]
})
export class BasicModule { }

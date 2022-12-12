import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectComponent} from "./custom-select/custom-select.component";
import {ClickOutsideDirective} from './_directives/click-outside.directive';
import {FilterPipe} from './_pipes/filter.pipe';
import {PopupComponent} from './popup/popup.component';
import {PopularBlockComponent} from './popular-block/popular-block.component';
import {PaginationComponent} from './pagination/pagination.component';
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    CustomSelectComponent,
    ClickOutsideDirective,
    FilterPipe,
    PopupComponent,
    PopularBlockComponent,
    PaginationComponent
  ],
  exports: [
    CustomSelectComponent,
    FilterPipe,
    PopupComponent,
    ClickOutsideDirective,
    PopularBlockComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule
  ]
})
export class SharedElementsModule {
}

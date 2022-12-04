import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectComponent} from "./custom-select/custom-select.component";
import {ClickOutsideDirective} from './_directives/click-outside.directive';
import {FilterPipe} from './_pipes/filter.pipe';


@NgModule({
  declarations: [
    CustomSelectComponent,
    ClickOutsideDirective,
    FilterPipe
  ],
  exports: [
    CustomSelectComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedElementsModule {
}

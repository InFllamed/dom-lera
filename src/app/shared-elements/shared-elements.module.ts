import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectComponent} from "./custom-select/custom-select.component";
import {ClickOutsideDirective} from './_directives/click-outside.directive';
import {FilterPipe} from './_pipes/filter.pipe';
import {PopupComponent} from './popup/popup.component';


@NgModule({
  declarations: [
    CustomSelectComponent,
    ClickOutsideDirective,
    FilterPipe,
    PopupComponent
  ],
  exports: [
    CustomSelectComponent,
    FilterPipe,
    PopupComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedElementsModule {
}

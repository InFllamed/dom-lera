import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomSelectComponent} from "./custom-select/custom-select.component";


@NgModule({
  declarations: [
    CustomSelectComponent
  ],
  exports: [
    CustomSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedElementsModule {
}

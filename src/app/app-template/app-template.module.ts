import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import {AppTemplateComponent} from "./app-template.component";
import {MainComponent} from "./main/main.component";
import {RouterOutlet} from "@angular/router";
import {AppTemplateRoutingModule} from "./app-template-routing.module";
import {BasicModule} from "../basic/basic.module";
import {SharedElementsModule} from "../shared-elements/shared-elements.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppTemplateComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    AppTemplateRoutingModule,
    BasicModule,
    SharedElementsModule,
    FormsModule
  ],
  exports: [
    AppTemplateComponent
  ],
})
export class AppTemplateModule {
}

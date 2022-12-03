import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsResetPluginModule} from "ngxs-reset-plugin";
import {NgxsModule} from "@ngxs/store";
import {stateList} from "./store";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsResetPluginModule.forRoot(),
    NgxsModule.forRoot([...stateList],
      {
        selectorOptions: {
          // injectContainerState: false,
          suppressErrors: true
        }
      }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
